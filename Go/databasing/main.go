package main

import (
	"database/sql"
	"fmt"
	"log"
	"time"

	_ "github.com/go-sql-driver/mysql"
)

func main() {
	db, err := sql.Open("mysql", "root:mysqlroot@(127.0.0.1:3306)/dbname?parseTime=true")
	if err != nil {
		log.Fatal(err)
	}

	// Initialize the first connection to the database, to see if everything works correctly.
	// Make sure to check the error.
	if err := db.Ping(); err != nil {
		log.Fatal(err)
	}

	// { // Create a new table
	// 	query := `
	// 		CREATE TABLE users (
	// 			id INT AUTO_INCREMENT,
	// 			username TEXT NOT NULL,
	// 			password TEXT NOT NULL,
	// 			created_at DATETIME,
	// 			PRIMARY KEY (id)
	// 		);`

	// 	if _, err := db.Exec(query); err != nil {
	// 		log.Fatal(err)
	// 	}
	// }

	{ // Insert a new item
		username := "johndoe"
		password := "secret"
		createdAt := time.Now()

		result, err := db.Exec(`INSERT INTO users (username, password, created_at) VALUES (?,?,?);`, username, password, createdAt)

		if err != nil {
			log.Fatal(err)
		}

		id, err := result.LastInsertId()
		if err != nil {
			log.Fatal(err)
		}
		fmt.Println(id)
	}

	{ // Query for single user
		var (
			id        int
			username  string
			password  string
			createdAt time.Time
		)

		query := "SELECT id, username, password, created_at from users WHERE id = ?"
		if err := db.QueryRow(query, 2).Scan(&id, &username, &password, &createdAt); err != nil {
			log.Fatal(err)
		}

		fmt.Println(id, username, password, createdAt)
	}

	{ // Query for all users
		type user struct {
			id				int
			username 	string
			password	string
			createdAt time.Time
		}

		rows, err := db.Query(`SELECT * FROM users`)
		if err != nil {
			log.Fatal(err)
		}
		defer rows.Close()

		var users []user
		for rows.Next() {
			var u user

			err := rows.Scan(&u.id, &u.username, &u.password, &u.createdAt)
			if err != nil {
				log.Fatal(err)
			}
			users = append(users, u)
		}
		if err := rows.Err(); err != nil {
			log.Fatal(err)
		}

		fmt.Printf("%#v", users)
	}

	{ // Delete query
		_, err := db.Exec(`DELETE from users WHERE id = ?`, 2)
		if err != nil {
			log.Fatal(err)
		}
	}
}

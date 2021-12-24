package main

import (
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
)

func main() {
	// 1. HTTP
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		// fmt.Fprintf(w, "Hello, you've requested: %s\n", r.URL.Path)
		fmt.Fprintf(w, "Welcome to my site!")
	})

	// 2. Serve static files
	// NOTE: not working
	// To serve static assets like JavaScript, CSS and image
	fs := http.FileServer(http.Dir("static/"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))

	// 3.Rouste using gorilla mux
	// e.g.: /books/go-programming-blueprint/page/10
	r := mux.NewRouter()
	r.HandleFunc("/books/{title}/page/{page}", func (w http.ResponseWriter, r *http.Request) {
		// get the book and navigate
		vars := mux.Vars(r)
		title := vars["title"]
		page := vars["page"]

		fmt.Fprintf(w, "You've requested the book: %s and page %s\n", title, page)
	})

	// methods
	// r.HandleFunc("/books/{title}", CreateBook).Methods("POST")
	// r.HandleFunc("/books/{title}", ReadBook).Methods("GET")
	// r.HandleFunc("/books/{title}", UpdateBook).Methods("PUT")
	// r.HandleFunc("/books/{title}", DeleteBook).Methods("DELETE")

	// hostname and subdomains
	// r.HandleFunc("/books/{title}", BookHandler).Host("www.mybookstore.com")

	// schemes
	// r.HandleFunc("/secure", SecureHandler).Schemes("https")
	// r.HandleFunc("/insecure", InsecureHandler).Schemes("http")

	// path and prefix
	// bookrouter := r.PathPrefix("/books").Subrouter()
	// bookrouter.HandleFunc("/", AllBooks)
	// bookrouter.HandleFunc("/{title}", GetBook)

	// Listen and Serve
	fmt.Println("Attemp to serve and listen")
	// http.ListenAndServe(":80", nil) // use net/http default routing
	http.ListenAndServe(":80", r) // use the gorilla/mux
}
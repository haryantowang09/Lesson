package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		// fmt.Fprintf(w, "Hello, you've requested: %s\n", r.URL.Path)
		fmt.Fprintf(w, "Welcome to my site!")
	})
	fmt.Println("Attemp to serve and listen")

	// Serve static files
	// To serve static assets like JavaScript, CSS and image
	fs := http.FileServer(http.Dir("static/"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))

	// Listen and Serve
	http.ListenAndServe(":80", nil)
}
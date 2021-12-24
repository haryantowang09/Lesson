package sample

import "net/http"

func createNewMiddleware() Middleware {
	middleware := func(next http.HandlerFunc) http.HandlerFunc {
		handler := func(w http.ResponseWriter, r *http.Request) {
			// do something
			next(w, r)
		}

		return handler
	}

	return middleware
}

func main() {
	createNewMiddleware()
}

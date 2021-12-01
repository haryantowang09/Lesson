package main

import "fmt"

func brainwash(saying *string) {
	*saying = "Beep Boop."
}

func lifeToggler(tog bool) {
  tog = true
}

func  doubleThat(count *float64) {
  *count += 2
}

func tryingZero(trial *int) {
  if (trial === 0) {

  }
}

func main() {
	greeting := "Hello there!"
  lever := false
  numba := 2.1
	
  brainwash(&greeting)
  lifeToggler(lever)
  doubleThat(&numba)
	
	fmt.Println("greeting is now:", greeting)
  fmt.Println("life toggling is now:", lever)
  fmt.Println("doubling or floating64 is now:", numba)

  // Find the zero value of a pointer that is initialized but hasn’t been assigned a value.
  tryingZero := 0
  checkThat(&tryingZero)
}



package main

import (
  "fmt"
  "math/rand"
  "time"
)

func main() {
  rand.Seed(time.Now().UnixNano())
  isHeistOn := false
  eludedGuards := rand.Intn(100)

  if eludedGuards <= 30 {
    fmt.Println("Looks like you've managed to make it past the guards. Good job, but remember, this is the first step.")
  } else {
    fmt.Println("Plan a better disguise next time?")
  }

  fmt.Println("isHeistOn is currently: ", isHeistOn)

  openedVault := rand.Intn(100)
  if isHeistOn && openedVault >= 80 {
    fmt.Println("Grab and GO!")
  } else if !isHeistOn {
    fmt.Println("Vault can't be opened.")
  }

  leftSafely := rand.Intn(5)
  if isHeistOn {
    switch leftSafely {
      case 0:
        isHeistOn = false
        fmt.Print("Turns out vault doors don't open from the inside...")
      case 1:
        isHeistOn = false
        fmt.Print("The total reward is not as huge as expected...")
      default:
        fmt.Print("Start the getaway car!")
    }
  } else {
    amtStolen := 10000 + rand.Intn(1000000)
    fmt.Println("This much is stolen $", amtStolen)
  }
}

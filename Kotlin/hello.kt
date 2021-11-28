fun main() {
    // val border = "="
    val border = "`-._,-'"
    printBorder(border, 4)
    println("Happy Birthday, Jhansi!")
    printBorder(border, 4)
}

fun printBorder(border: String, timesToRepeat: Int) {
    repeat(timesToRepeat) {
        print(border)
    }
    println()
}

// function, argument, variable, and loop
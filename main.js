const grace = {
    name: "Grace",
    species: "Schnauzer",
    nicknames: ["Gracie", "Princess"],
    age: 11,
    bark: function() {
        window.alert("WOOF!")
    },
    pant: function() {
        window.alert("Pant Pant Pant")
    },
    whine: function() {
        window.alert("Whhhhiiiinnnneeeee")
    },
    favoriteToys: [],
    play: function(toy) {
        let toys = toy.toLowerCase()
        if (toys.includes("rubber")) {
            this.favoriteToys.push(toy)
        }
        console.log(this.favoriteToys)
    }
}
grace.bark()
grace.pant()
grace.whine()
grace.play("Rubber ball")
grace.play("Rubber bone")



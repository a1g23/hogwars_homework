// In app.js
 $(() => {
	const $container = $("#container")
    console.log($container)

    const $h1 = $("<h1>")
    console.log($h1)
    $container.append($h1)
    $h1.text("Hogwarts")
 
    const $h2 = $("<h2>")
    console.log($h2)
    $container.append($h2)
    $h2.text("Alex Greenberg")

    const $h3 = $("<h3>")
    console.log($h3)
    $container.append($h3)
    $h3.text("Gryffindor")

    const $h4 = $("<h4>")
    console.log($h4)
    $h4.addClass("dog")
    console.log($h4)
    $container.append($h4)
    $h4.text("Nellie")

    const $h4Wand = $("<h4>")
    console.log($h4Wand)
    
    $container.append($h4Wand)
    $h4Wand.text("Super Special Wand")

// adding ul with attribute of storage = trunk

const $ulTrunk = $("<ul>")
$ulTrunk.attr("storage", "trunk")
console.log($ulTrunk)

$container.append($ulTrunk)

// butter beer

const $liButterBeer = $("<li>")
$liButterBeer.text("Butter Beer")
$ulTrunk.append($liButterBeer)


// invisibility cloak (add a class of secret)

const $liCloak = $("<li>")
$liCloak.addClass("secret")
$liCloak.text("Invisibility Cloak")
$ulTrunk.append($liCloak)

// magic map (add a class of secret)

const $liMap = $("<li>")
$liMap.addClass("secret")
$liMap.text("Magic Map")
$ulTrunk.append($liMap)

// time turner (add a class of secret)

const $liTimeTurn = $("<li>")
$liTimeTurn.addClass("secret")
$liTimeTurn.text("Time Turner")
$ulTrunk.append($liTimeTurn)


// leash (for your pet, be sure to give this list element the same class as you gave your pet)

const $liLeash = $("<li>")
$liLeash.addClass("dog")
$liLeash.text("Leash")
$ulTrunk.append($liLeash)

// Bertie Bott's Every Flavor [Jelly] Beans.

const $liBertie = $("<li>")
$liBertie.text("Bertie Bott's Every Flavor [Jelly] Beans")
$ulTrunk.append($liBertie)



});



  
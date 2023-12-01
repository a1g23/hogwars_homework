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

// make a table

const $table = $("<table>")
$container.append($table)

// above table add h5

const $h5 = $("<h5>")
$table.before($h5.text("Spring 2017"))

// add a thread element

const $thead = $("<thead>")
$table.append($thead)

const $thDay = $("<th>")
$thead.append($thDay.text("Day"))

const $thClasses = $("<th>")
$thead.append($thClasses.text("Classes"))


// Monday
const $trMon = $("<tr>")
$table.append($trMon)

const $tdMon = $("<td>")
$trMon.append($tdMon.text("Monday"))

const $tdClassMon = $("<td>")
$trMon.append($tdClassMon.text("Herbology, Divination, History of Magic"))


//Tuesday
const $trTue = $("<tr>")
$table.append($trTue)

const $tdTue = $("<td>")
$trTue.append($tdTue.text("Tuesday"))

const $tdClassTue = $("<td>")
$trTue.append($tdClassTue.text("Charms, Potions"))


//Wednesday
const $trWed = $("<tr>")
$table.append($trWed)

const $tdWed = $("<td>")
$trWed.append($tdWed.text("Wednesday"))

const $tdClassWed = $("<td>")
$trWed.append($tdClassWed.text("Transfiguration"))

//Thursday
const $trThu = $("<tr>")
$table.append($trThu)

const $tdThu = $("<td>")
$trThu.append($tdThu.text("Thursday"))

const $tdClassThu = $("<td>")
$trThu.append($tdClassThu.text("Defense Against the Dark Arts"))

//Friday
const $trFri = $("<tr>")
$table.append($trFri)

const $tdFri = $("<td>")
$trFri.append($tdFri.text("Monday"))

const $tdClassFri = $("<td>")
$trFri.append($tdClassFri.text("Quidditch practice"))



// Year 5
//remove your wand and break it

$h4Wand.remove()

// kill the beer

$liButterBeer.remove()

// new wand in the h4

$h4Wand.text("the new and improved wand")
$h4.after($h4Wand)

// add color of indigo to the wand in jquery

$h4Wand.css("color", "indigo")

// remove pet Nellie ($h4) from the DOM and then put it after the table - have to take the whole element to move not the class

$h4.remove()
$table.after($h4)

// remove Nellie again and put back after Gryffindor ($h3)

$h3.after($h4)

// interestingly, i didnt have to remove just put $h4 after h3?? still the right output





// year 6
//hide function with slow
// variable to grab all my secrets

const $secrets = $(".secret")
console.log($secrets)

// chain it together - delay had to go before hide (makes sense)
$secrets.delay(2000).hide("slow")

//use show to show all the secrets
$secrets.show("slow")


// add a class to my leash li ($liLeash)
$liLeash.addClass("cabbage")


// fix my pets leash and remove the cabbage class

$liLeash.removeClass("cabbage")


});



  
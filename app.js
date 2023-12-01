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
});



  
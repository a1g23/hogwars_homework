// In app.js
 $(() => {
	const $container = $("#container")
    console.log($container)

    const $h1 = $("<h1>")
    console.log($h1)
    $h1.text = "Hogwarts"
    console.log($h1)
    $container.append($h1.text)
});
// Query for your div with the id of container and set it to a variable named $container
// console.log $container
// Create an <h1> element and set it to a variable called $h1 and console log it
// Add some text inside the h1 element. Example text: 'Hogwarts'
// Why isn't your $h1 it appearing on your page? I havent appended it yet


  
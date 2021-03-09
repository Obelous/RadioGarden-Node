const radioGarden = require("./index");

async function test(){
    console.log("Search", (await radioGarden.search("p4 dalarna"))[0], "\n");
    console.log("Get Station", await radioGarden.getStation("dcQx2xhE"), "\n");
    console.log("Get Geo", await radioGarden.getGeo(), "\n");
    await radioGarden.getPlaces(); // logs too much
}
radioGarden.search()
test();
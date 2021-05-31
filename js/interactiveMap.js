const mapNodes = [
    {
        "title": "Wits University",
        "Neighbourhood": "Braamfontein",
        "text": "test for now"
    },
    {
        "title": "Constitution Hill",
        "Neighbourhood": "Braamfontein",
        "text": "test for now"
    },
    {
        "title": "Museum Africa",
        "Neighbourhood": "Newtown",
        "text": "test for now"
    },
    {
        "title": "City Hall",
        "Neighbourhood": "Marshall Town",
        "text": "test for now"
    },
    {
        "title": "JAHS Office",
        "Neighbourhood": "Bezuidenhout Valley",
        "text": "test for now"
    }
]

function ShowInfo(mapNodes) {
    document.getElementById("heading").innerHTML = mapNodes.title;
    document.getElementById("subheading").innerHTML = mapNodes.Neighbourhood;
    document.getElementById("para").innerHTML = mapNodes.text;
}
const mapNodes = [
    {
        "title": "Wits University",
        "Neighbourhood": "Braamfontein",
        "text": "Originally founded in 1896 in Kimberly, The University of Witwatersrand became officially established in 1922 in Braamfontein. It is one of the oldest universities in South Africa and hosts a few different museums on its large campus. It hosts two provioncial heritage sites including the main facade of its great hall, as well as a selection of historical and scientifically important artifacts"
    },
    {
        "title": "Constitution Hill",
        "Neighbourhood": "Braamfontein",
        "text": "Originally a fort sitting on a raised position overlooking old Johannesburg, this place server as a prison for much of its original lifespan, holding many famous prisoners back in the day. It is now a precinct that includes the current constitutional court and also features some outdoor art and history exhbitions. Commonly used for public events."
    },
    {
        "title": "Museum Africa",
        "Neighbourhood": "Newtown",
        "text": "This space once served as Johannesburg fresh produce market back in the 1910's, being served by the nearby Braamfontein railyway station and the bigger Park Station. It later became a major archive and museum for african literature and cultural artifacts, owned by the Johannesburg Public Library. At this point it was known as the Africana Museum, but in 1994 it was renamed as Museum Africa. It is right next to a cluster of other museums and historical sites like Mary Fitzgerald Square."
    },
    {
        "title": "City Hall",
        "Neighbourhood": "Marshall Town",
        "text": "Built in 1914, Johannesburg City Hall has stood over the central business for over a hundred years. It was constructed by a Cape Town based architecture firm on the space of an old market square. The building is currently the provincial legislature and has been rebuilt and modified a few times, but much of the original building remains. It is a majestic slice of old Joburg architecture."
    },
    {
        "title": "JAHS Office",
        "Neighbourhood": "Bezuidenhout Valley",
        "text": "Our lovely society office, off of the busy of Bez valley. This building is a classic example of the kind of small post war homes built throughout the area."
    }
]

function ShowInfo(mapNodes) {
    document.getElementById("heading").innerHTML = mapNodes.title;
    document.getElementById("subheading").innerHTML = mapNodes.Neighbourhood;
    document.getElementById("para").innerHTML = mapNodes.text;
}
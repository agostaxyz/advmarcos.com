function expFunc() {
    var d = new Date();
    var y = d.getFullYear();
    x = y - 2001
    document.getElementById("experiencia").innerHTML = "Mais de " + x + " anos de experiência.";
} 

function antiSpam() { //Preventing web scraping
    if (arguments == "phone") {
        tel = '+551199852' + '-3338';
        document.getElementById(arguments).innerHTML = tel;
        document.getElementById(arguments).setAttribute('href', tel);
    }

}


/*
Returns a list of reviews.
@param locationName Name of the location to retrieve reviews for.
@return List<Reviews> A list of reviews.
@throws Exception

locationName = "Advocadia Marcos Monteiro Cândido"
adv MMC = Place ID: ChIJL1 - 59c4Dz5QRVwC5xDoahqA

public static List < Review > listReviews(String locationName) throws Exception {
    Mybusiness.Accounts.Locations.Reviews.List reviewsList =
        mybusiness.accounts().locations().reviews().list(locationName);
    ListReviewsResponse response = accountsList.execute();
    List < Reviews > reviews = response.getReviews();

    for (Reviews review : reviews) {
        System.out.println(review.toPrettyString());
    }
    return reviews;
}
*/
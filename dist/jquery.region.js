/**
 * jquery-region - Easily bind countries with linked state/province selection to your form
 * @version v1.0.1
 * @link https://github.com/mdurrant/jquery-region
 * @license 
 */

;
jQuery.extend({
    regionSelector: {
        reset: function() {
            jQuery('select[data-region-src="state"]').empty();

            jQuery('select[data-region-src="country"]').empty().append('<option value=""></option>');
        },
        bind: function(c, s) {
            this.reset();

            for (var i in jQRegionSelectorData) {
                if (jQRegionSelectorData[i].name == c) {
                    jQuery('select[data-region-src="country"]').append("<option selected='selected'>" + jQRegionSelectorData[i].name + "</option>");

                    var data = jQRegionSelectorData[i];

                    if (data.divider === true) {
                        continue;
                    }

                    for (var i in data.states) {
                        if (data.states[i] == s) {
                            jQuery('select[data-region-src="state"]').append("<option selected='selected'>" + data.states[i] + "</option>");
                        } else {
                            jQuery('select[data-region-src="state"]').append("<option>" + data.states[i] + "</option>");
                        }
                    }
                } else {
                    jQuery('select[data-region-src="country"]').append("<option>" + jQRegionSelectorData[i].name + "</option>");
                }
            }

            jQuery('select[data-region-src="country"]').unbind('change').on('change',
            function(e) {
                jQuery('select[data-region-src="state"]').empty();

                var idx = jQuery(this).prop('selectedIndex');

                if (idx === 0) {
                    return;
                }

                var data = jQRegionSelectorData[idx - 1];
                if (data.divider === true) {
                    return;
                }

                for (var i in data.states) {
                    jQuery('select[data-region-src="state"]').append("<option>" + data.states[i] + "</option>");
                }
            });
        }
    }
});

jQuery(function(c, s) {
    jQuery.regionSelector.bind(c, s);
});

/**
 * jquery-region - Easily bind countries with linked state/province selection to your form
 * @version v1.0.1
 * @link https://github.com/mdurrant/jquery-region
 * @license 
 */

var jQRegionSelectorData = [{
    "name": "United Kingdom",
    "states": ["Barking and Dagenham", "Barnet", "Barnsley", "Bath and North East Somerset", "Bedfordshire", "Bexley", "Birmingham", "Blackburn with Darwen", "Blackpool", "Bolton", "Bournemouth", "Bracknell Forest", "Bradford", "Brent", "Brighton and Hove", "Bromley", "Buckinghamshire", "Bury", "Calderdale", "Cambridgeshire", "Camden", "Cheshire", "City of Bristol", "City of Kingston upon Hull", "City of London", "Cornwall", "Coventry", "Croydon", "Cumbria", "Darlington", "Derby", "Derbyshire", "Devon", "Doncaster", "Dorset", "Dudley", "Durham", "Ealing", "East Riding of Yorkshire", "East Sussex", "Enfield", "Essex", "Gateshead", "Gloucestershire", "Greenwich", "Hackney", "Halton", "Hammersmith and Fulham", "Hampshire", "Haringey", "Harrow", "Hartlepool", "Havering", "Herefordshire", "Hertfordshire", "Hillingdon", "Hounslow", "Isle of Wight", "Islington", "Kensington and Chelsea", "Kent", "Kingston upon Thames", "Kirklees", "Knowsley", "Lambeth", "Lancashire", "Leeds", "Leicester", "Leicestershire", "Lewisham", "Lincolnshire", "Liverpool", "Luton", "Manchester", "Medway", "Merton", "Middlesbrough", "Milton Keynes", "Newcastle upon Tyne", "Newham", "Norfolk", "North East Lincolnshire", "North Lincolnshire", "North Somerset", "North Tyneside", "North Yorkshire", "Northamptonshire", "Northumberland", "Nottingham", "Nottinghamshire", "Oldham", "Oxfordshire", "Peterborough", "Plymouth", "Poole", "Portsmouth", "Reading", "Redbridge", "Redcar and Cleveland", "Richmond upon Thames", "Rochdale", "Rotherham", "Rutland", "Salford", "Sandwell", "Sefton", "Sheffield", "Shropshire", "Slough", "Solihull", "Somerset", "South Gloucestershire", "South Tyneside", "Southampton", "Southend-on-Sea", "Southwark", "St. Helens", "Staffordshire", "Stockport", "Stockton-on-Tees", "Stoke-on-Trent", "Suffolk", "Sunderland", "Surrey", "Sutton", "Swindon", "Tameside", "Telford and Wrekin", "Thurrock", "Torbay", "Tower Hamlets", "Trafford", "Wakefield", "Walsall", "Waltham Forest", "Wandsworth", "Warrington", "Warwickshire", "West Berkshire", "West Sussex", "Westminster", "Wigan", "Wiltshire", "Windsor and Maidenhead", "Wirral", "Wokingham", "Wolverhampton", "Worcestershire", "York"],
    "divider": false
},
{
    "name": "United States",
    "states": ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"],
    "divider": false
},
{
    "name": "Canada",
    "states": ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland", "Northwest Territories", "Nova Scotia", "Nunavut", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan", "Yukon Territory"],
    "divider": false
},
{
    "name": "------",
    "states": [""],
    "divider": true
},
{
    "name": "Afghanistan",
    "states": ["Badakhshan", "Badghis", "Baghlan", "Balkh", "Bamian", "Farah", "Faryab", "Ghazni", "Ghowr", "Helmand", "Herat", "Jowzjan", "Kabol", "Kandahar", "Kapisa", "Konar", "Kondoz", "Laghman", "Lowgar", "Nangarhar", "Nimruz", "Oruzgan", "Paktia", "Paktika", "Parvan", "Samangan", "Sar-e Pol", "Takhar", "Vardak", "Zabol"],
    "divider": false
},
{
    "name": "Albania",
    "states": ["Berat", "Bulqize", "Delvine", "Devoll (Bilisht)", "Diber (Peshkopi)", "Durres", "Elbasan", "Fier", "Gjirokaster", "Gramsh", "Has (Krume)", "Kavaje", "Kolonje (Erseke)", "Korce", "Kruje", "Kucove", "Kukes", "Kurbin", "Lezhe", "Librazhd", "Lushnje", "Malesi e Madhe (Koplik)", "Mallakaster (Ballsh)", "Mat (Burrel)", "Mirdite (Rreshen)", "Peqin", "Permet", "Pogradec", "Puke", "Sarande", "Shkoder", "Skrapar (Corovode)", "Tepelene", "Tirane (Tirana)", "Tirane (Tirana)", "Tropoje (Bajram Curri)", "Vlore"],
    "divider": false
},
{
    "name": "Algeria",
    "states": ["Adrar", "Ain Defla", "Ain Temouchent", "Alger", "Annaba", "Batna", "Bechar", "Bejaia", "Biskra", "Blida", "Bordj Bou Arreridj", "Bouira", "Boumerdes", "Chlef", "Constantine", "Djelfa", "El Bayadh", "El Oued", "El Tarf", "Ghardaia", "Guelma", "Illizi", "Jijel", "Khenchela", "Laghouat", "M'Sila", "Mascara", "Medea", "Mila", "Mostaganem", "Naama", "Oran", "Ouargla", "Oum el Bouaghi", "Relizane", "Saida", "Setif", "Sidi Bel Abbes", "Skikda", "Souk Ahras", "Tamanghasset", "Tebessa", "Tiaret", "Tindouf", "Tipaza", "Tissemsilt", "Tizi Ouzou", "Tlemcen"],
    "divider": false
},
{
    "name": "American Samoa",
    "states": ["Eastern", "Manu'a", "Rose Island", "Swains Island", "Western"],
    "divider": false
},
{
    "name": "Angola",
    "states": ["Andorra la Vella", "Bengo", "Benguela", "Bie", "Cabinda", "Canillo", "Cuando Cubango", "Cuanza Norte", "Cuanza Sul", "Cunene", "Encamp", "Escaldes-Engordany", "Huambo", "Huila", "La Massana", "Luanda", "Lunda Norte", "Lunda Sul", "Malanje", "Moxico", "Namibe", "Ordino", "Sant Julia de Loria", "Uige", "Zaire"],
    "divider": false
},
{
    "name": "Anguilla",
    "states": ["Anguilla"],
    "divider": false
},
{
    "name": "Antartica",
    "states": ["Antartica"],
    "divider": false
},
{
    "name": "Antigua and Barbuda",
    "states": ["Barbuda", "Redonda", "Saint George", "Saint John", "Saint Mary", "Saint Paul", "Saint Peter", "Saint Philip"],
    "divider": false
},
{
    "name": "Argentina",
    "states": ["Antartica e Islas del Atlantico Sur", "Buenos Aires", "Buenos Aires Capital Federal", "Catamarca", "Chaco", "Chubut", "Cordoba", "Corrientes", "Entre Rios", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquen", "Rio Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego", "Tucuman"],
    "divider": false
},
{
    "name": "Armenia",
    "states": ["Aragatsotn", "Ararat", "Armavir", "Geghark'unik'", "Kotayk'", "Lorri", "Shirak", "Syunik'", "Tavush", "Vayots' Dzor", "Yerevan"],
    "divider": false
},
{
    "name": "Aruba",
    "states": ["Aruba"],
    "divider": false
},
{
    "name": "Ashmore and Cartier Island",
    "states": ["Ashmore and Cartier Island"],
    "divider": false
},
{
    "name": "Australia",
    "states": ["Australian Capital Territory", "New South Wales", "Northern Territory", "Queensland", "South Australia", "Tasmania", "Victoria", "Western Australia"],
    "divider": false
},
{
    "name": "Austria",
    "states": ["Burgenland", "Kaernten", "Niederoesterreich", "Oberoesterreich", "Salzburg", "Steiermark", "Tirol", "Vorarlberg", "Wien"],
    "divider": false
},
{
    "name": "Azerbaijan",
    "states": ["Abseron Rayonu", "Agcabadi Rayonu", "Agdam Rayonu", "Agdas Rayonu", "Agstafa Rayonu", "Agsu Rayonu", "Ali Bayramli Sahari", "Astara Rayonu", "Baki Sahari", "Balakan Rayonu", "Barda Rayonu", "Beylaqan Rayonu", "Bilasuvar Rayonu", "Cabrayil Rayonu", "Calilabad Rayonu", "Daskasan Rayonu", "Davaci Rayonu", "Fuzuli Rayonu", "Gadabay Rayonu", "Ganca Sahari", "Goranboy Rayonu", "Goycay Rayonu", "Haciqabul Rayonu", "Imisli Rayonu", "Ismayilli Rayonu", "Kalbacar Rayonu", "Kurdamir Rayonu", "Lacin Rayonu", "Lankaran Rayonu", "Lankaran Sahari", "Lerik Rayonu", "Masalli Rayonu", "Mingacevir Sahari", "Naftalan Sahari", "Naxcivan Muxtar Respublikasi", "Neftcala Rayonu", "Oguz Rayonu", "Qabala Rayonu", "Qax Rayonu", "Qazax Rayonu", "Qobustan Rayonu", "Quba Rayonu", "Qubadli Rayonu", "Qusar Rayonu", "Saatli Rayonu", "Sabirabad Rayonu", "Saki Rayonu", "Saki Sahari", "Salyan Rayonu", "Samaxi Rayonu", "Samkir Rayonu", "Samux Rayonu", "Siyazan Rayonu", "Sumqayit Sahari", "Susa Rayonu", "Susa Sahari", "Tartar Rayonu", "Tovuz Rayonu", "Ucar Rayonu", "Xacmaz Rayonu", "Xankandi Sahari", "Xanlar Rayonu", "Xizi Rayonu", "Xocali Rayonu", "Xocavand Rayonu", "Yardimli Rayonu", "Yevlax Rayonu", "Yevlax Sahari", "Zangilan Rayonu", "Zaqatala Rayonu", "Zardab Rayonu"],
    "divider": false
},
{
    "name": "Bahamas",
    "states": ["Acklins and Crooked Islands", "Bimini", "Cat Island", "Exuma", "Freeport", "Fresh Creek", "Governor's Harbour", "Green Turtle Cay", "Harbour Island", "High Rock", "Inagua", "Kemps Bay", "Long Island", "Marsh Harbour", "Mayaguana", "New Providence", "Nicholls Town and Berry Islands", "Ragged Island", "Rock Sound", "San Salvador and Rum Cay", "Sandy Point"],
    "divider": false
},
{
    "name": "Bahrain",
    "states": ["Al Hadd", "Al Manamah", "Al Mintaqah al Gharbiyah", "Al Mintaqah al Wusta", "Al Mintaqah ash Shamaliyah", "Al Muharraq", "Ar Rifa' wa al Mintaqah al Janubiyah", "Jidd Hafs", "Juzur Hawar", "Madinat 'Isa", "Madinat Hamad", "Sitrah"],
    "divider": false
},
{
    "name": "Bangladesh",
    "states": ["Barguna", "Barisal", "Bhola", "Jhalokati", "Patuakhali", "Pirojpur", "Bandarban", "Brahmanbaria", "Chandpur", "Chittagong", "Comilla", "Cox's Bazar", "Feni", "Khagrachari", "Lakshmipur", "Noakhali", "Rangamati", "Dhaka", "Faridpur", "Gazipur", "Gopalganj", "Jamalpur", "Kishoreganj", "Madaripur", "Manikganj", "Munshiganj", "Mymensingh", "Narayanganj", "Narsingdi", "Netrokona", "Rajbari", "Shariatpur", "Sherpur", "Tangail", "Bagerhat", "Chuadanga", "Jessore", "Jhenaidah", "Khulna", "Kushtia", "Magura", "Meherpur", "Narail", "Satkhira", "Bogra", "Dinajpur", "Gaibandha", "Jaipurhat", "Kurigram", "Lalmonirhat", "Naogaon", "Natore", "Nawabganj", "Nilphamari", "Pabna", "Panchagarh", "Rajshahi", "Rangpur", "Sirajganj", "Thakurgaon", "Habiganj", "Maulvi bazar", "Sunamganj", "Sylhet"],
    "divider": false
},
{
    "name": "Barbados",
    "states": ["Bridgetown", "Christ Church", "Saint Andrew", "Saint George", "Saint James", "Saint John", "Saint Joseph", "Saint Lucy", "Saint Michael", "Saint Peter", "Saint Philip", "Saint Thomas"],
    "divider": false
},
{
    "name": "Belarus",
    "states": ["Brestskaya (Brest)", "Homyel'skaya (Homyel')", "Horad Minsk", "Hrodzyenskaya (Hrodna)", "Mahilyowskaya (Mahilyow)", "Minskaya", "Vitsyebskaya (Vitsyebsk)"],
    "divider": false
},
{
    "name": "Belgium",
    "states": ["Antwerpen", "Brabant Wallon", "Brussels Capitol Region", "Hainaut", "Liege", "Limburg", "Luxembourg", "Namur", "Oost-Vlaanderen", "Vlaams Brabant", "West-Vlaanderen"],
    "divider": false
},
{
    "name": "Belize",
    "states": ["Belize", "Cayo", "Corozal", "Orange Walk", "Stann Creek", "Toledo"],
    "divider": false
},
{
    "name": "Benin",
    "states": ["Alibori", "Atakora", "Atlantique", "Borgou", "Collines", "Couffo", "Donga", "Littoral", "Mono", "Oueme", "Plateau", "Zou"],
    "divider": false
},
{
    "name": "Bermuda",
    "states": ["Devonshire", "Hamilton", "Hamilton", "Paget", "Pembroke", "Saint George", "Saint Georges", "Sandys", "Smiths", "Southampton", "Warwick"],
    "divider": false
},
{
    "name": "Bhutan",
    "states": ["Bumthang", "Chhukha", "Chirang", "Daga", "Geylegphug", "Ha", "Lhuntshi", "Mongar", "Paro", "Pemagatsel", "Punakha", "Samchi", "Samdrup Jongkhar", "Shemgang", "Tashigang", "Thimphu", "Tongsa", "Wangdi Phodrang"],
    "divider": false
},
{
    "name": "Bolivia",
    "states": ["Beni", "Chuquisaca", "Cochabamba", "La Paz", "Oruro", "Pando", "Potosi", "Santa Cruz", "Tarija"],
    "divider": false
},
{
    "name": "Bosnia and Herzegovina",
    "states": ["Federation of Bosnia and Herzegovina", "Republika Srpska"],
    "divider": false
},
{
    "name": "Botswana",
    "states": ["Central", "Chobe", "Francistown", "Gaborone", "Ghanzi", "Kgalagadi", "Kgatleng", "Kweneng", "Lobatse", "Ngamiland", "North-East", "Selebi-Pikwe", "South-East", "Southern"],
    "divider": false
},
{
    "name": "Brazil",
    "states": ["Acre", "Alagoas", "Amapa", "Amazonas", "Bahia", "Ceara", "Distrito Federal", "Espirito Santo", "Goias", "Maranhao", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Para", "Paraiba", "Parana", "Pernambuco", "Piaui", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondonia", "Roraima", "Santa Catarina", "Sao Paulo", "Sergipe", "Tocantins"],
    "divider": false
},
{
    "name": "British Virgin Islands",
    "states": ["Anegada", "Jost Van Dyke", "Tortola", "Virgin Gorda"],
    "divider": false
},
{
    "name": "Brunei",
    "states": ["Belait", "Brunei and Muara", "Temburong", "Tutong"],
    "divider": false
},
{
    "name": "Bulgaria",
    "states": ["Blagoevgrad", "Burgas", "Dobrich", "Gabrovo", "Khaskovo", "Kurdzhali", "Kyustendil", "Lovech", "Montana", "Pazardzhik", "Pernik", "Pleven", "Plovdiv", "Razgrad", "Ruse", "Shumen", "Silistra", "Sliven", "Smolyan", "Sofiya", "Sofiya-Grad", "Stara Zagora", "Turgovishte", "Varna", "Veliko Turnovo", "Vidin", "Vratsa", "Yambol"],
    "divider": false
},
{
    "name": "Burkina Faso",
    "states": ["Bale", "Bam", "Banwa", "Bazega", "Bougouriba", "Boulgou", "Boulkiemde", "Comoe", "Ganzourgou", "Gnagna", "Gourma", "Houet", "Ioba", "Kadiogo", "Kenedougou", "Komandjari", "Kompienga", "Kossi", "Koupelogo", "Kouritenga", "Kourweogo", "Leraba", "Loroum", "Mouhoun", "Nahouri", "Namentenga", "Naumbiel", "Nayala", "Oubritenga", "Oudalan", "Passore", "Poni", "Samentenga", "Sanguie", "Seno", "Sissili", "Soum", "Sourou", "Tapoa", "Tuy", "Yagha", "Yatenga", "Ziro", "Zondomo", "Zoundweogo"],
    "divider": false
},
{
    "name": "Burma",
    "states": ["Ayeyarwady", "Bago", "Chin State", "Kachin State", "Kayah State", "Kayin State", "Magway", "Mandalay", "Mon State", "Rakhine State", "Sagaing", "Shan State", "Tanintharyi", "Yangon"],
    "divider": false
},
{
    "name": "Burundi",
    "states": ["Bubanza", "Bujumbura", "Bururi", "Cankuzo", "Cibitoke", "Gitega", "Karuzi", "Kayanza", "Kirundo", "Makamba", "Muramvya", "Muyinga", "Mwaro", "Ngozi", "Rutana", "Ruyigi"],
    "divider": false
},
{
    "name": "Cambodia",
    "states": ["Banteay Mean Cheay", "Batdambang", "Kampong Cham", "Kampong Chhnang", "Kampong Spoe", "Kampong Thum", "Kampot", "Kandal", "Kaoh Kong", "Keb", "Kracheh", "Mondol Kiri", "Otdar Mean Cheay", "Pailin", "Phnum Penh", "Pouthisat", "Preah Seihanu (Sihanoukville)", "Preah Vihear", "Prey Veng", "Rotanah Kiri", "Siem Reab", "Stoeng Treng", "Svay Rieng", "Takev"],
    "divider": false
},
{
    "name": "Cameroon",
    "states": ["Adamaoua", "Centre", "Est", "Extreme-Nord", "Littoral", "Nord", "Nord-Ouest", "Ouest", "Sud", "Sud-Ouest"],
    "divider": false
},
{
    "name": "Cape Verde",
    "states": ["Boa Vista", "Brava", "Maio", "Mosteiros", "Paul", "Porto Novo", "Praia", "Ribeira Grande", "Sal", "Santa Catarina", "Santa Cruz", "Sao Domingos", "Sao Filipe", "Sao Nicolau", "Sao Vicente", "Tarrafal"],
    "divider": false
},
{
    "name": "Cayman Islands",
    "states": ["Creek", "Eastern", "Midland", "South Town", "Spot Bay", "Stake Bay", "West End", "Western"],
    "divider": false
},
{
    "name": "Central African Republic",
    "states": ["Bamingui-Bangoran", "Bangui", "Basse-Kotto", "Gribingui", "Haut-Mbomou", "Haute-Kotto", "Haute-Sangha", "Kemo-Gribingui", "Lobaye", "Mbomou", "Nana-Mambere", "Ombella-Mpoko", "Ouaka", "Ouham", "Ouham-Pende", "Sangha", "Vakaga"],
    "divider": false
},
{
    "name": "Chad",
    "states": ["Batha", "Biltine", "Borkou-Ennedi-Tibesti", "Chari-Baguirmi", "Guera", "Kanem", "Lac", "Logone Occidental", "Logone Oriental", "Mayo-Kebbi", "Moyen-Chari", "Ouaddai", "Salamat", "Tandjile"],
    "divider": false
},
{
    "name": "Chile",
    "states": ["Aisen del General Carlos Ibanez del Campo", "Antofagasta", "Araucania", "Atacama", "Bio-Bio", "Coquimbo", "Libertador General Bernardo O'Higgins", "Los Lagos", "Magallanes y de la Antartica Chilena", "Maule", "Region Metropolitana (Santiago)", "Tarapaca", "Valparaiso"],
    "divider": false
},
{
    "name": "China",
    "states": ["Anhui", "Beijing", "Chongqing", "Fujian", "Gansu", "Guangdong", "Guangxi", "Guizhou", "Hainan", "Hebei", "Heilongjiang", "Henan", "Hubei", "Hunan", "Jiangsu", "Jiangxi", "Jilin", "Liaoning", "Nei Mongol", "Ningxia", "Qinghai", "Shaanxi", "Shandong", "Shanghai", "Shanxi", "Sichuan", "Tianjin", "Xinjiang", "Xizang (Tibet)", "Yunnan", "Zhejiang"],
    "divider": false
},
{
    "name": "Christmas Island",
    "states": ["Christmas Island"],
    "divider": false
},
{
    "name": "Clipperton Island",
    "states": ["Clipperton Island"],
    "divider": false
},
{
    "name": "Cocos (Keeling) Islands",
    "states": ["Direction Island", "Home Island", "Horsburgh Island", "North Keeling Island", "South Island", "West Island"],
    "divider": false
},
{
    "name": "Colombia",
    "states": ["Amazonas", "Antioquia", "Arauca", "Atlantico", "Bolivar", "Boyaca", "Caldas", "Caqueta", "Casanare", "Cauca", "Cesar", "Choco", "Cordoba", "Cundinamarca", "Distrito Capital de Santa Fe de Bogota", "Guainia", "Guaviare", "Huila", "La Guajira", "Magdalena", "Meta", "Narino", "Norte de Santander", "Putumayo", "Quindio", "Risaralda", "San Andres y Providencia", "Santander", "Sucre", "Tolima", "Valle del Cauca", "Vaupes", "Vichada"],
    "divider": false
},
{
    "name": "Comoros",
    "states": ["Anjouan (Nzwani)", "Domoni", "Fomboni", "Grande Comore (Njazidja)", "Moheli (Mwali)", "Moroni", "Moutsamoudou"],
    "divider": false
},
{
    "name": "Congo, Democratic Republic of the",
    "states": ["Bandundu", "Bas-Congo", "Equateur", "Kasai-Occidental", "Kasai-Oriental", "Katanga", "Kinshasa", "Maniema", "Nord-Kivu", "Orientale", "Sud-Kivu"],
    "divider": false
},
{
    "name": "Congo, Republic of the",
    "states": ["Bouenza", "Brazzaville", "Cuvette", "Kouilou", "Lekoumou", "Likouala", "Niari", "Plateaux", "Pool", "Sangha"],
    "divider": false
},
{
    "name": "Cook Islands",
    "states": ["Aitutaki", "Atiu", "Avarua", "Mangaia", "Manihiki", "Manuae", "Mauke", "Mitiaro", "Nassau Island", "Palmerston", "Penrhyn", "Pukapuka", "Rakahanga", "Rarotonga", "Suwarrow", "Takutea"],
    "divider": false
},
{
    "name": "Costa Rica",
    "states": ["Alajuela", "Cartago", "Guanacaste", "Heredia", "Limon", "Puntarenas", "San Jose"],
    "divider": false
},
{
    "name": "Cote d'Ivoire",
    "states": ["Abengourou", "Abidjan", "Aboisso", "Adiake'", "Adzope", "Agboville", "Agnibilekrou", "Ale'pe'", "Bangolo", "Beoumi", "Biankouma", "Bocanda", "Bondoukou", "Bongouanou", "Bouafle", "Bouake", "Bouna", "Boundiali", "Dabakala", "Dabon", "Daloa", "Danane", "Daoukro", "Dimbokro", "Divo", "Duekoue", "Ferkessedougou", "Gagnoa", "Grand Bassam", "Grand-Lahou", "Guiglo", "Issia", "Jacqueville", "Katiola", "Korhogo", "Lakota", "Man", "Mankono", "Mbahiakro", "Odienne", "Oume", "Sakassou", "San-Pedro", "Sassandra", "Seguela", "Sinfra", "Soubre", "Tabou", "Tanda", "Tiassale", "Tiebissou", "Tingrela", "Touba", "Toulepleu", "Toumodi", "Vavoua", "Yamoussoukro", "Zuenoula"],
    "divider": false
},
{
    "name": "Croatia",
    "states": ["Bjelovarsko-Bilogorska Zupanija", "Brodsko-Posavska Zupanija", "Dubrovacko-Neretvanska Zupanija", "Istarska Zupanija", "Karlovacka Zupanija", "Koprivnicko-Krizevacka Zupanija", "Krapinsko-Zagorska Zupanija", "Licko-Senjska Zupanija", "Medimurska Zupanija", "Osjecko-Baranjska Zupanija", "Pozesko-Slavonska Zupanija", "Primorsko-Goranska Zupanija", "Sibensko-Kninska Zupanija", "Sisacko-Moslavacka Zupanija", "Splitsko-Dalmatinska Zupanija", "Varazdinska Zupanija", "Viroviticko-Podravska Zupanija", "Vukovarsko-Srijemska Zupanija", "Zadarska Zupanija", "Zagreb", "Zagrebacka Zupanija"],
    "divider": false
},
{
    "name": "Cuba",
    "states": ["Camaguey", "Ciego de Avila", "Cienfuegos", "Ciudad de La Habana", "Granma", "Guantanamo", "Holguin", "Isla de la Juventud", "La Habana", "Las Tunas", "Matanzas", "Pinar del Rio", "Sancti Spiritus", "Santiago de Cuba", "Villa Clara"],
    "divider": false
},
{
    "name": "Cyprus",
    "states": ["Famagusta", "Kyrenia", "Larnaca", "Limassol", "Nicosia", "Paphos"],
    "divider": false
},
{
    "name": "Czeck Republic",
    "states": ["Brnensky", "Budejovicky", "Jihlavsky", "Karlovarsky", "Kralovehradecky", "Liberecky", "Olomoucky", "Ostravsky", "Pardubicky", "Plzensky", "Praha", "Stredocesky", "Ustecky", "Zlinsky"],
    "divider": false
},
{
    "name": "Denmark",
    "states": ["Arhus", "Bornholm", "Fredericksberg", "Frederiksborg", "Fyn", "Kobenhavn", "Kobenhavns", "Nordjylland", "Ribe", "Ringkobing", "Roskilde", "Sonderjylland", "Storstrom", "Vejle", "Vestsjalland", "Viborg"],
    "divider": false
},
{
    "name": "Djibouti",
    "states": ["'Ali Sabih", "Dikhil", "Djibouti", "Obock", "Tadjoura"],
    "divider": false
},
{
    "name": "Dominica",
    "states": ["Saint Andrew", "Saint David", "Saint George", "Saint John", "Saint Joseph", "Saint Luke", "Saint Mark", "Saint Patrick", "Saint Paul", "Saint Peter"],
    "divider": false
},
{
    "name": "Dominican Republic",
    "states": ["Azua", "Baoruco", "Barahona", "Dajabon", "Distrito Nacional", "Duarte", "El Seibo", "Elias Pina", "Espaillat", "Hato Mayor", "Independencia", "La Altagracia", "La Romana", "La Vega", "Maria Trinidad Sanchez", "Monsenor Nouel", "Monte Cristi", "Monte Plata", "Pedernales", "Peravia", "Puerto Plata", "Salcedo", "Samana", "San Cristobal", "San Juan", "San Pedro de Macoris", "Sanchez Ramirez", "Santiago", "Santiago Rodriguez", "Valverde"],
    "divider": false
},
{
    "name": "Ecuador",
    "states": ["Azuay", "Bolivar", "Canar", "Carchi", "Chimborazo", "Cotopaxi", "El Oro", "Esmeraldas", "Galapagos", "Guayas", "Imbabura", "Loja", "Los Rios", "Manabi", "Morona-Santiago", "Napo", "Orellana", "Pastaza", "Pichincha", "Sucumbios", "Tungurahua", "Zamora-Chinchipe"],
    "divider": false
},
{
    "name": "Egypt",
    "states": ["Ad Daqahliyah", "Al Bahr al Ahmar", "Al Buhayrah", "Al Fayyum", "Al Gharbiyah", "Al Iskandariyah", "Al Isma'iliyah", "Al Jizah", "Al Minufiyah", "Al Minya", "Al Qahirah", "Al Qalyubiyah", "Al Wadi al Jadid", "As Suways", "Ash Sharqiyah", "Aswan", "Asyut", "Bani Suwayf", "Bur Sa'id", "Dumyat", "Janub Sina'", "Kafr ash Shaykh", "Matruh", "Qina", "Shamal Sina'", "Suhaj"],
    "divider": false
},
{
    "name": "El Salvador",
    "states": ["Ahuachapan", "Cabanas", "Chalatenango", "Cuscatlan", "La Libertad", "La Paz", "La Union", "Morazan", "San Miguel", "San Salvador", "San Vicente", "Santa Ana", "Sonsonate", "Usulutan"],
    "divider": false
},
{
    "name": "Equatorial Guinea",
    "states": ["Annobon", "Bioko Norte", "Bioko Sur", "Centro Sur", "Kie-Ntem", "Litoral", "Wele-Nzas"],
    "divider": false
},
{
    "name": "Eritrea",
    "states": ["Akale Guzay", "Barka", "Denkel", "Hamasen", "Sahil", "Semhar", "Senhit", "Seraye"],
    "divider": false
},
{
    "name": "Estonia",
    "states": ["Harjumaa (Tallinn)", "Hiiumaa (Kardla)", "Ida-Virumaa (Johvi)", "Jarvamaa (Paide)", "Jogevamaa (Jogeva)", "Laane-Virumaa (Rakvere)", "Laanemaa (Haapsalu)", "Parnumaa (Parnu)", "Polvamaa (Polva)", "Raplamaa (Rapla)", "Saaremaa (Kuessaare)", "Tartumaa (Tartu)", "Valgamaa (Valga)", "Viljandimaa (Viljandi)", "Vorumaa (Voru)"],
    "divider": false
},
{
    "name": "Ethiopia",
    "states": ["Adis Abeba (Addis Ababa)", "Afar", "Amara", "Dire Dawa", "Gambela Hizboch", "Hareri Hizb", "Oromiya", "Sumale", "Tigray", "YeDebub Biheroch Bihereseboch na Hizboch"],
    "divider": false
},
{
    "name": "Europa Island",
    "states": ["Europa Island"],
    "divider": false
},
{
    "name": "Falkland Islands (Islas Malvinas)",
    "states": ["Falkland Islands (Islas Malvinas)"],
    "divider": false
},
{
    "name": "Faroe Islands",
    "states": ["Bordoy", "Eysturoy", "Mykines", "Sandoy", "Skuvoy", "Streymoy", "Suduroy", "Tvoroyri", "Vagar"],
    "divider": false
},
{
    "name": "Fiji",
    "states": ["Central", "Eastern", "Northern", "Rotuma", "Western"],
    "divider": false
},
{
    "name": "Finland",
    "states": ["Aland", "Etela-Suomen Laani", "Ita-Suomen Laani", "Lansi-Suomen Laani", "Lappi", "Oulun Laani"],
    "divider": false
},
{
    "name": "France",
    "states": ["Alsace", "Aquitaine", "Auvergne", "Basse-Normandie", "Bourgogne", "Bretagne", "Centre", "Champagne-Ardenne", "Corse", "Franche-Comte", "Haute-Normandie", "Ile-de-France", "Languedoc-Roussillon", "Limousin", "Lorraine", "Midi-Pyrenees", "Nord-Pas-de-Calais", "Pays de la Loire", "Picardie", "Poitou-Charentes", "Provence-Alpes-Cote d'Azur", "Rhone-Alpes"],
    "divider": false
},
{
    "name": "French Guiana",
    "states": ["French Guiana"],
    "divider": false
},
{
    "name": "French Polynesia",
    "states": ["Archipel des Marquises", "Archipel des Tuamotu", "Archipel des Tubuai", "Iles du Vent", "Iles Sous-le-Vent"],
    "divider": false
},
{
    "name": "French Southern and Antarctic Lands",
    "states": ["Adelie Land", "Ile Crozet", "Iles Kerguelen", "Iles Saint-Paul et Amsterdam"],
    "divider": false
},
{
    "name": "Gabon",
    "states": ["Estuaire", "Haut-Ogooue", "Moyen-Ogooue", "Ngounie", "Nyanga", "Ogooue-Ivindo", "Ogooue-Lolo", "Ogooue-Maritime", "Woleu-Ntem"],
    "divider": false
},
{
    "name": "Gambia, The",
    "states": ["Banjul", "Central River", "Lower River", "North Bank", "Upper River", "Western"],
    "divider": false
},
{
    "name": "Gaza Strip",
    "states": ["Gaza Strip"],
    "divider": false
},
{
    "name": "Georgia",
    "states": ["Abashis", "Abkhazia or Ap'khazet'is Avtonomiuri Respublika (Sokhumi)", "Adigenis", "Ajaria or Acharis Avtonomiuri Respublika (Bat'umi)", "Akhalgoris", "Akhalk'alak'is", "Akhalts'ikhis", "Akhmetis", "Ambrolauris", "Aspindzis", "Baghdat'is", "Bolnisis", "Borjomis", "Ch'khorotsqus", "Ch'okhatauris", "Chiat'ura", "Dedop'listsqaros", "Dmanisis", "Dushet'is", "Gardabanis", "Gori", "Goris", "Gurjaanis", "Javis", "K'arelis", "K'ut'aisi", "Kaspis", "Kharagaulis", "Khashuris", "Khobis", "Khonis", "Lagodekhis", "Lanch'khut'is", "Lentekhis", "Marneulis", "Martvilis", "Mestiis", "Mts'khet'is", "Ninotsmindis", "Onis", "Ozurget'is", "P'ot'i", "Qazbegis", "Qvarlis", "Rust'avi", "Sach'kheris", "Sagarejos", "Samtrediis", "Senakis", "Sighnaghis", "T'bilisi", "T'elavis", "T'erjolis", "T'et'ritsqaros", "T'ianet'is", "Tqibuli", "Ts'ageris", "Tsalenjikhis", "Tsalkis", "Tsqaltubo", "Vanis", "Zestap'onis", "Zugdidi", "Zugdidis"],
    "divider": false
},
{
    "name": "Germany",
    "states": ["Baden-Wuerttemberg", "Bayern", "Berlin", "Brandenburg", "Bremen", "Hamburg", "Hessen", "Mecklenburg-Vorpommern", "Niedersachsen", "Nordrhein-Westfalen", "Rheinland-Pfalz", "Saarland", "Sachsen", "Sachsen-Anhalt", "Schleswig-Holstein", "Thueringen"],
    "divider": false
},
{
    "name": "Ghana",
    "states": ["Ashanti", "Brong-Ahafo", "Central", "Eastern", "Greater Accra", "Northern", "Upper East", "Upper West", "Volta", "Western"],
    "divider": false
},
{
    "name": "Gibraltar",
    "states": ["Gibraltar"],
    "divider": false
},
{
    "name": "Glorioso Islands",
    "states": ["Ile du Lys", "Ile Glorieuse"],
    "divider": false
},
{
    "name": "Greece",
    "states": ["Aitolia kai Akarnania", "Akhaia", "Argolis", "Arkadhia", "Arta", "Attiki", "Ayion Oros (Mt. Athos)", "Dhodhekanisos", "Drama", "Evritania", "Evros", "Evvoia", "Florina", "Fokis", "Fthiotis", "Grevena", "Ilia", "Imathia", "Ioannina", "Irakleion", "Kardhitsa", "Kastoria", "Kavala", "Kefallinia", "Kerkyra", "Khalkidhiki", "Khania", "Khios", "Kikladhes", "Kilkis", "Korinthia", "Kozani", "Lakonia", "Larisa", "Lasithi", "Lesvos", "Levkas", "Magnisia", "Messinia", "Pella", "Pieria", "Preveza", "Rethimni", "Rodhopi", "Samos", "Serrai", "Thesprotia", "Thessaloniki", "Trikala", "Voiotia", "Xanthi", "Zakinthos"],
    "divider": false
},
{
    "name": "Greenland",
    "states": ["Avannaa (Nordgronland)", "Kitaa (Vestgronland)", "Tunu (Ostgronland)"],
    "divider": false
},
{
    "name": "Grenada",
    "states": ["Carriacou and Petit Martinique", "Saint Andrew", "Saint David", "Saint George", "Saint John", "Saint Mark", "Saint Patrick"],
    "divider": false
},
{
    "name": "Guadeloupe",
    "states": ["Basse-Terre", "Grande-Terre", "Iles de la Petite Terre", "Iles des Saintes", "Marie-Galante"],
    "divider": false
},
{
    "name": "Guam",
    "states": ["Guam"],
    "divider": false
},
{
    "name": "Guatemala",
    "states": ["Alta Verapaz", "Baja Verapaz", "Chimaltenango", "Chiquimula", "El Progreso", "Escuintla", "Guatemala", "Huehuetenango", "Izabal", "Jalapa", "Jutiapa", "Peten", "Quetzaltenango", "Quiche", "Retalhuleu", "Sacatepequez", "San Marcos", "Santa Rosa", "Solola", "Suchitepequez", "Totonicapan", "Zacapa"],
    "divider": false
},
{
    "name": "Guernsey",
    "states": ["Castel", "Forest", "St. Andrew", "St. Martin", "St. Peter Port", "St. Pierre du Bois", "St. Sampson", "St. Saviour", "Torteval", "Vale"],
    "divider": false
},
{
    "name": "Guinea",
    "states": ["Beyla", "Boffa", "Boke", "Conakry", "Coyah", "Dabola", "Dalaba", "Dinguiraye", "Dubreka", "Faranah", "Forecariah", "Fria", "Gaoual", "Gueckedou", "Kankan", "Kerouane", "Kindia", "Kissidougou", "Koubia", "Koundara", "Kouroussa", "Labe", "Lelouma", "Lola", "Macenta", "Mali", "Mamou", "Mandiana", "Nzerekore", "Pita", "Siguiri", "Telimele", "Tougue", "Yomou"],
    "divider": false
},
{
    "name": "Guinea-Bissau",
    "states": ["Bafata", "Biombo", "Bissau", "Bolama-Bijagos", "Cacheu", "Gabu", "Oio", "Quinara", "Tombali"],
    "divider": false
},
{
    "name": "Guyana",
    "states": ["Barima-Waini", "Cuyuni-Mazaruni", "Demerara-Mahaica", "East Berbice-Corentyne", "Essequibo Islands-West Demerara", "Mahaica-Berbice", "Pomeroon-Supenaam", "Potaro-Siparuni", "Upper Demerara-Berbice", "Upper Takutu-Upper Essequibo"],
    "divider": false
},
{
    "name": "Haiti",
    "states": ["Artibonite", "Centre", "Grand'Anse", "Nord", "Nord-Est", "Nord-Ouest", "Ouest", "Sud", "Sud-Est"],
    "divider": false
},
{
    "name": "Heard Island and McDonald Islands",
    "states": ["Heard Island and McDonald Islands"],
    "divider": false
},
{
    "name": "Holy See (Vatican City)",
    "states": ["Holy See (Vatican City)"],
    "divider": false
},
{
    "name": "Honduras",
    "states": ["Atlantida", "Choluteca", "Colon", "Comayagua", "Copan", "Cortes", "El Paraiso", "Francisco Morazan", "Gracias a Dios", "Intibuca", "Islas de la Bahia", "La Paz", "Lempira", "Ocotepeque", "Olancho", "Santa Barbara", "Valle", "Yoro"],
    "divider": false
},
{
    "name": "Hong Kong",
    "states": ["Hong Kong"],
    "divider": false
},
{
    "name": "Howland Island",
    "states": ["Howland Island"],
    "divider": false
},
{
    "name": "Hungary",
    "states": ["Bacs-Kiskun", "Baranya", "Bekes", "Bekescsaba", "Borsod-Abauj-Zemplen", "Budapest", "Csongrad", "Debrecen", "Dunaujvaros", "Eger", "Fejer", "Gyor", "Gyor-Moson-Sopron", "Hajdu-Bihar", "Heves", "Hodmezovasarhely", "Jasz-Nagykun-Szolnok", "Kaposvar", "Kecskemet", "Komarom-Esztergom", "Miskolc", "Nagykanizsa", "Nograd", "Nyiregyhaza", "Pecs", "Pest", "Somogy", "Sopron", "Szabolcs-Szatmar-Bereg", "Szeged", "Szekesfehervar", "Szolnok", "Szombathely", "Tatabanya", "Tolna", "Vas", "Veszprem", "Veszprem", "Zala", "Zalaegerszeg"],
    "divider": false
},
{
    "name": "Iceland",
    "states": ["Akranes", "Akureyri", "Arnessysla", "Austur-Bardhastrandarsysla", "Austur-Hunavatnssysla", "Austur-Skaftafellssysla", "Borgarfjardharsysla", "Dalasysla", "Eyjafjardharsysla", "Gullbringusysla", "Hafnarfjordhur", "Husavik", "Isafjordhur", "Keflavik", "Kjosarsysla", "Kopavogur", "Myrasysla", "Neskaupstadhur", "Nordhur-Isafjardharsysla", "Nordhur-Mulasys-la", "Nordhur-Thingeyjarsysla", "Olafsfjordhur", "Rangarvallasysla", "Reykjavik", "Saudharkrokur", "Seydhisfjordhur", "Siglufjordhur", "Skagafjardharsysla", "Snaefellsnes-og Hnappadalssysla", "Strandasysla", "Sudhur-Mulasysla", "Sudhur-Thingeyjarsysla", "Vesttmannaeyjar", "Vestur-Bardhastrandarsysla", "Vestur-Hunavatnssysla", "Vestur-Isafjardharsysla", "Vestur-Skaftafellssysla"],
    "divider": false
},
{
    "name": "India",
    "states": ["Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Pondicherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Tripura", "Uttar Pradesh", "Uttaranchal", "West Bengal"],
    "divider": false
},
{
    "name": "Indonesia",
    "states": ["Aceh", "Bali", "Banten", "Bengkulu", "East Timor", "Gorontalo", "Irian Jaya", "Jakarta Raya", "Jambi", "Jawa Barat", "Jawa Tengah", "Jawa Timur", "Kalimantan Barat", "Kalimantan Selatan", "Kalimantan Tengah", "Kalimantan Timur", "Kepulauan Bangka Belitung", "Lampung", "Maluku", "Maluku Utara", "Nusa Tenggara Barat", "Nusa Tenggara Timur", "Riau", "Sulawesi Selatan", "Sulawesi Tengah", "Sulawesi Tenggara", "Sulawesi Utara", "Sumatera Barat", "Sumatera Selatan", "Sumatera Utara", "Yogyakarta"],
    "divider": false
},
{
    "name": "Iran",
    "states": ["Ardabil", "Azarbayjan-e Gharbi", "Azarbayjan-e Sharqi", "Bushehr", "Chahar Mahall va Bakhtiari", "Esfahan", "Fars", "Gilan", "Golestan", "Hamadan", "Hormozgan", "Ilam", "Kerman", "Kermanshah", "Khorasan", "Khuzestan", "Kohgiluyeh va Buyer Ahmad", "Kordestan", "Lorestan", "Markazi", "Mazandaran", "Qazvin", "Qom", "Semnan", "Sistan va Baluchestan", "Tehran", "Yazd", "Zanjan"],
    "divider": false
},
{
    "name": "Iraq",
    "states": ["Al Anbar", "Al Basrah", "Al Muthanna", "Al Qadisiyah", "An Najaf", "Arbil", "As Sulaymaniyah", "At Ta'mim", "Babil", "Baghdad", "Dahuk", "Dhi Qar", "Diyala", "Karbala'", "Maysan", "Ninawa", "Salah ad Din", "Wasit"],
    "divider": false
},
{
    "name": "Ireland",
    "states": ["Carlow", "Cavan", "Clare", "Cork", "Donegal", "Dublin", "Galway", "Kerry", "Kildare", "Kilkenny", "Laois", "Leitrim", "Limerick", "Longford", "Louth", "Mayo", "Meath", "Monaghan", "Offaly", "Roscommon", "Sligo", "Tipperary", "Waterford", "Westmeath", "Wexford", "Wicklow"],
    "divider": false
},
{
    "name": "Ireland, Northern",
    "states": ["Antrim", "Ards", "Armagh", "Ballymena", "Ballymoney", "Banbridge", "Belfast", "Carrickfergus", "Castlereagh", "Coleraine", "Cookstown", "Craigavon", "Derry", "Down", "Dungannon", "Fermanagh", "Larne", "Limavady", "Lisburn", "Magherafelt", "Moyle", "Newry and Mourne", "Newtownabbey", "North Down", "Omagh", "Strabane"],
    "divider": false
},
{
    "name": "Israel",
    "states": ["Central", "Haifa", "Jerusalem", "Northern", "Southern", "Tel Aviv"],
    "divider": false
},
{
    "name": "Italy",
    "states": ["Abruzzo", "Basilicata", "Calabria", "Campania", "Emilia-Romagna", "Friuli-Venezia Giulia", "Lazio", "Liguria", "Lombardia", "Marche", "Molise", "Piemonte", "Puglia", "Sardegna", "Sicilia", "Toscana", "Trentino-Alto Adige", "Umbria", "Valle d'Aosta", "Veneto"],
    "divider": false
},
{
    "name": "Jamaica",
    "states": ["Clarendon", "Hanover", "Kingston", "Manchester", "Portland", "Saint Andrew", "Saint Ann", "Saint Catherine", "Saint Elizabeth", "Saint James", "Saint Mary", "Saint Thomas", "Trelawny", "Westmoreland"],
    "divider": false
},
{
    "name": "Jan Mayen",
    "states": ["Jan Mayen"],
    "divider": false
},
{
    "name": "Japan",
    "states": ["Aichi", "Akita", "Aomori", "Chiba", "Ehime", "Fukui", "Fukuoka", "Fukushima", "Gifu", "Gumma", "Hiroshima", "Hokkaido", "Hyogo", "Ibaraki", "Ishikawa", "Iwate", "Kagawa", "Kagoshima", "Kanagawa", "Kochi", "Kumamoto", "Kyoto", "Mie", "Miyagi", "Miyazaki", "Nagano", "Nagasaki", "Nara", "Niigata", "Oita", "Okayama", "Okinawa", "Osaka", "Saga", "Saitama", "Shiga", "Shimane", "Shizuoka", "Tochigi", "Tokushima", "Tokyo", "Tottori", "Toyama", "Wakayama", "Yamagata", "Yamaguchi", "Yamanashi"],
    "divider": false
},
{
    "name": "Jarvis Island",
    "states": ["Jarvis Island"],
    "divider": false
},
{
    "name": "Jersey",
    "states": ["Jersey"],
    "divider": false
},
{
    "name": "Johnston Atoll",
    "states": ["Johnston Atoll"],
    "divider": false
},
{
    "name": "Jordan",
    "states": ["'Amman", "Ajlun", "Al 'Aqabah", "Al Balqa'", "Al Karak", "Al Mafraq", "At Tafilah", "Az Zarqa'", "Irbid", "Jarash", "Ma'an", "Madaba"],
    "divider": false
},
{
    "name": "Juan de Nova Island",
    "states": ["Juan de Nova Island"],
    "divider": false
},
{
    "name": "Kazakhstan",
    "states": ["Almaty", "Aqmola", "Aqtobe", "Astana", "Atyrau", "Batys Qazaqstan", "Bayqongyr", "Mangghystau", "Ongtustik Qazaqstan", "Pavlodar", "Qaraghandy", "Qostanay", "Qyzylorda", "Shyghys Qazaqstan", "Soltustik Qazaqstan", "Zhambyl"],
    "divider": false
},
{
    "name": "Kenya",
    "states": ["Central", "Coast", "Eastern", "Nairobi Area", "North Eastern", "Nyanza", "Rift Valley", "Western"],
    "divider": false
},
{
    "name": "Kiribati",
    "states": ["Abaiang", "Abemama", "Aranuka", "Arorae", "Banaba", "Banaba", "Beru", "Butaritari", "Central Gilberts", "Gilbert Islands", "Kanton", "Kiritimati", "Kuria", "Line Islands", "Line Islands", "Maiana", "Makin", "Marakei", "Nikunau", "Nonouti", "Northern Gilberts", "Onotoa", "Phoenix Islands", "Southern Gilberts", "Tabiteuea", "Tabuaeran", "Tamana", "Tarawa", "Tarawa", "Teraina"],
    "divider": false
},
{
    "name": "Korea, North",
    "states": ["Chagang-do (Chagang Province)", "Hamgyong-bukto (North Hamgyong Province)", "Hamgyong-namdo (South Hamgyong Province)", "Hwanghae-bukto (North Hwanghae Province)", "Hwanghae-namdo (South Hwanghae Province)", "Kaesong-si (Kaesong City)", "Kangwon-do (Kangwon Province)", "Namp'o-si (Namp'o City)", "P'yongan-bukto (North P'yongan Province)", "P'yongan-namdo (South P'yongan Province)", "P'yongyang-si (P'yongyang City)", "Yanggang-do (Yanggang Province)"],
    "divider": false
},
{
    "name": "Korea, South",
    "states": ["Ch'ungch'ong-bukto", "Ch'ungch'ong-namdo", "Cheju-do", "Cholla-bukto", "Cholla-namdo", "Inch'on-gwangyoksi", "Kangwon-do", "Kwangju-gwangyoksi", "Kyonggi-do", "Kyongsang-bukto", "Kyongsang-namdo", "Pusan-gwangyoksi", "Soul-t'ukpyolsi", "Taegu-gwangyoksi", "Taejon-gwangyoksi", "Ulsan-gwangyoksi"],
    "divider": false
},
{
    "name": "Kuwait",
    "states": ["Al 'Asimah", "Al Ahmadi", "Al Farwaniyah", "Al Jahra'", "Hawalli"],
    "divider": false
},
{
    "name": "Kyrgyzstan",
    "states": ["Batken Oblasty", "Bishkek Shaary", "Chuy Oblasty (Bishkek)", "Jalal-Abad Oblasty", "Naryn Oblasty", "Osh Oblasty", "Talas Oblasty", "Ysyk-Kol Oblasty (Karakol)"],
    "divider": false
},
{
    "name": "Laos",
    "states": ["Attapu", "Bokeo", "Bolikhamxai", "Champasak", "Houaphan", "Khammouan", "Louangnamtha", "Louangphabang", "Oudomxai", "Phongsali", "Salavan", "Savannakhet", "Viangchan", "Viangchan", "Xaignabouli", "Xaisomboun", "Xekong", "Xiangkhoang"],
    "divider": false
},
{
    "name": "Latvia",
    "states": ["Aizkraukles Rajons", "Aluksnes Rajons", "Balvu Rajons", "Bauskas Rajons", "Cesu Rajons", "Daugavpils", "Daugavpils Rajons", "Dobeles Rajons", "Gulbenes Rajons", "Jekabpils Rajons", "Jelgava", "Jelgavas Rajons", "Jurmala", "Kraslavas Rajons", "Kuldigas Rajons", "Leipaja", "Liepajas Rajons", "Limbazu Rajons", "Ludzas Rajons", "Madonas Rajons", "Ogres Rajons", "Preilu Rajons", "Rezekne", "Rezeknes Rajons", "Riga", "Rigas Rajons", "Saldus Rajons", "Talsu Rajons", "Tukuma Rajons", "Valkas Rajons", "Valmieras Rajons", "Ventspils", "Ventspils Rajons"],
    "divider": false
},
{
    "name": "Lebanon",
    "states": ["Beyrouth", "Ech Chimal", "Ej Jnoub", "El Bekaa", "Jabal Loubnane"],
    "divider": false
},
{
    "name": "Lesotho",
    "states": ["Berea", "Butha-Buthe", "Leribe", "Mafeteng", "Maseru", "Mohales Hoek", "Mokhotlong", "Qacha's Nek", "Quthing", "Thaba-Tseka"],
    "divider": false
},
{
    "name": "Liberia",
    "states": ["Bomi", "Bong", "Grand Bassa", "Grand Cape Mount", "Grand Gedeh", "Grand Kru", "Lofa", "Margibi", "Maryland", "Montserrado", "Nimba", "River Cess", "Sinoe"],
    "divider": false
},
{
    "name": "Libya",
    "states": ["Ajdabiya", "Al 'Aziziyah", "Al Fatih", "Al Jabal al Akhdar", "Al Jufrah", "Al Khums", "Al Kufrah", "An Nuqat al Khams", "Ash Shati'", "Awbari", "Az Zawiyah", "Banghazi", "Darnah", "Ghadamis", "Gharyan", "Misratah", "Murzuq", "Sabha", "Sawfajjin", "Surt", "Tarabulus", "Tarhunah", "Tubruq", "Yafran", "Zlitan"],
    "divider": false
},
{
    "name": "Liechtenstein",
    "states": ["Balzers", "Eschen", "Gamprin", "Mauren", "Planken", "Ruggell", "Schaan", "Schellenberg", "Triesen", "Triesenberg", "Vaduz"],
    "divider": false
},
{
    "name": "Lithuania",
    "states": ["Akmenes Rajonas", "Alytaus Rajonas", "Alytus", "Anyksciu Rajonas", "Birstonas", "Birzu Rajonas", "Druskininkai", "Ignalinos Rajonas", "Jonavos Rajonas", "Joniskio Rajonas", "Jurbarko Rajonas", "Kaisiadoriu Rajonas", "Kaunas", "Kauno Rajonas", "Kedainiu Rajonas", "Kelmes Rajonas", "Klaipeda", "Klaipedos Rajonas", "Kretingos Rajonas", "Kupiskio Rajonas", "Lazdiju Rajonas", "Marijampole", "Marijampoles Rajonas", "Mazeikiu Rajonas", "Moletu Rajonas", "Neringa Pakruojo Rajonas", "Palanga", "Panevezio Rajonas", "Panevezys", "Pasvalio Rajonas", "Plunges Rajonas", "Prienu Rajonas", "Radviliskio Rajonas", "Raseiniu Rajonas", "Rokiskio Rajonas", "Sakiu Rajonas", "Salcininku Rajonas", "Siauliai", "Siauliu Rajonas", "Silales Rajonas", "Silutes Rajonas", "Sirvintu Rajonas", "Skuodo Rajonas", "Svencioniu Rajonas", "Taurages Rajonas", "Telsiu Rajonas", "Traku Rajonas", "Ukmerges Rajonas", "Utenos Rajonas", "Varenos Rajonas", "Vilkaviskio Rajonas", "Vilniaus Rajonas", "Vilnius", "Zarasu Rajonas"],
    "divider": false
},
{
    "name": "Luxembourg",
    "states": ["Diekirch", "Grevenmacher", "Luxembourg"],
    "divider": false
},
{
    "name": "Macau",
    "states": ["Macau"],
    "divider": false
},
{
    "name": "Macedonia, Former Yugoslav Republic of",
    "states": ["Aracinovo", "Bac", "Belcista", "Berovo", "Bistrica", "Bitola", "Blatec", "Bogdanci", "Bogomila", "Bogovinje", "Bosilovo", "Brvenica", "Cair (Skopje)", "Capari", "Caska", "Cegrane", "Centar (Skopje)", "Centar Zupa", "Cesinovo", "Cucer-Sandevo", "Debar", "Delcevo", "Delogozdi", "Demir Hisar", "Demir Kapija", "Dobrusevo", "Dolna Banjica", "Dolneni", "Dorce Petrov (Skopje)", "Drugovo", "Dzepciste", "Gazi Baba (Skopje)", "Gevgelija", "Gostivar", "Gradsko", "Ilinden", "Izvor", "Jegunovce", "Kamenjane", "Karbinci", "Karpos (Skopje)", "Kavadarci", "Kicevo", "Kisela Voda (Skopje)", "Klecevce", "Kocani", "Konce", "Kondovo", "Konopiste", "Kosel", "Kratovo", "Kriva Palanka", "Krivogastani", "Krusevo", "Kuklis", "Kukurecani", "Kumanovo", "Labunista", "Lipkovo", "Lozovo", "Lukovo", "Makedonska Kamenica", "Makedonski Brod", "Mavrovi Anovi", "Meseista", "Miravci", "Mogila", "Murtino", "Negotino", "Negotino-Poloska", "Novaci", "Novo Selo", "Oblesevo", "Ohrid", "Orasac", "Orizari", "Oslomej", "Pehcevo", "Petrovec", "Plasnia", "Podares", "Prilep", "Probistip", "Radovis", "Rankovce", "Resen", "Rosoman", "Rostusa", "Samokov", "Saraj", "Sipkovica", "Sopiste", "Sopotnika", "Srbinovo", "Star Dojran", "Staravina", "Staro Nagoricane", "Stip", "Struga", "Strumica", "Studenicani", "Suto Orizari (Skopje)", "Sveti Nikole", "Tearce", "Tetovo", "Topolcani", "Valandovo", "Vasilevo", "Veles", "Velesta", "Vevcani", "Vinica", "Vitoliste", "Vranestica", "Vrapciste", "Vratnica", "Vrutok", "Zajas", "Zelenikovo", "Zileno", "Zitose", "Zletovo", "Zrnovci"],
    "divider": false
},
{
    "name": "Madagascar",
    "states": ["Antananarivo", "Antsiranana", "Fianarantsoa", "Mahajanga", "Toamasina", "Toliara"],
    "divider": false
},
{
    "name": "Malawi",
    "states": ["Balaka", "Blantyre", "Chikwawa", "Chiradzulu", "Chitipa", "Dedza", "Dowa", "Karonga", "Kasungu", "Likoma", "Lilongwe", "Machinga (Kasupe)", "Mangochi", "Mchinji", "Mulanje", "Mwanza", "Mzimba", "Nkhata Bay", "Nkhotakota", "Nsanje", "Ntcheu", "Ntchisi", "Phalombe", "Rumphi", "Salima", "Thyolo", "Zomba"],
    "divider": false
},
{
    "name": "Malaysia",
    "states": ["Johor", "Kedah", "Kelantan", "Labuan", "Melaka", "Negeri Sembilan", "Pahang", "Perak", "Perlis", "Pulau Pinang", "Sabah", "Sarawak", "Selangor", "Terengganu", "Wilayah Persekutuan"],
    "divider": false
},
{
    "name": "Maldives",
    "states": ["Alifu", "Baa", "Dhaalu", "Faafu", "Gaafu Alifu", "Gaafu Dhaalu", "Gnaviyani", "Haa Alifu", "Haa Dhaalu", "Kaafu", "Laamu", "Lhaviyani", "Maale", "Meemu", "Noonu", "Raa", "Seenu", "Shaviyani", "Thaa", "Vaavu"],
    "divider": false
},
{
    "name": "Mali",
    "states": ["Gao", "Kayes", "Kidal", "Koulikoro", "Mopti", "Segou", "Sikasso", "Tombouctou"],
    "divider": false
},
{
    "name": "Malta",
    "states": ["Valletta"],
    "divider": false
},
{
    "name": "Man, Isle of",
    "states": ["Man, Isle of"],
    "divider": false
},
{
    "name": "Marshall Islands",
    "states": ["Ailinginae", "Ailinglaplap", "Ailuk", "Arno", "Aur", "Bikar", "Bikini", "Bokak", "Ebon", "Enewetak", "Erikub", "Jabat", "Jaluit", "Jemo", "Kili", "Kwajalein", "Lae", "Lib", "Likiep", "Majuro", "Maloelap", "Mejit", "Mili", "Namorik", "Namu", "Rongelap", "Rongrik", "Toke", "Ujae", "Ujelang", "Utirik", "Wotho", "Wotje"],
    "divider": false
},
{
    "name": "Martinique",
    "states": ["Martinique"],
    "divider": false
},
{
    "name": "Mauritania",
    "states": ["Adrar", "Assaba", "Brakna", "Dakhlet Nouadhibou", "Gorgol", "Guidimaka", "Hodh Ech Chargui", "Hodh El Gharbi", "Inchiri", "Nouakchott", "Tagant", "Tiris Zemmour", "Trarza"],
    "divider": false
},
{
    "name": "Mauritius",
    "states": ["Agalega Islands", "Black River", "Cargados Carajos Shoals", "Flacq", "Grand Port", "Moka", "Pamplemousses", "Plaines Wilhems", "Port Louis", "Riviere du Rempart", "Rodrigues", "Savanne"],
    "divider": false
},
{
    "name": "Mayotte",
    "states": ["Mayotte"],
    "divider": false
},
{
    "name": "Mexico",
    "states": ["Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas", "Chihuahua", "Coahuila de Zaragoza", "Colima", "Distrito Federal", "Durango", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "Mexico", "Michoacan de Ocampo", "Morelos", "Nayarit", "Nuevo Leon", "Oaxaca", "Puebla", "Queretaro de Arteaga", "Quintana Roo", "San Luis Potosi", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz-Llave", "Yucatan", "Zacatecas"],
    "divider": false
},
{
    "name": "Micronesia, Federated States of",
    "states": ["Chuuk (Truk)", "Kosrae", "Pohnpei", "Yap"],
    "divider": false
},
{
    "name": "Midway Islands",
    "states": ["Midway Islands"],
    "divider": false
},
{
    "name": "Moldova",
    "states": ["Balti", "Cahul", "Chisinau", "Chisinau", "Dubasari", "Edinet", "Gagauzia", "Lapusna", "Orhei", "Soroca", "Tighina", "Ungheni"],
    "divider": false
},
{
    "name": "Monaco",
    "states": ["Fontvieille", "La Condamine", "Monaco-Ville", "Monte-Carlo"],
    "divider": false
},
{
    "name": "Mongolia",
    "states": ["Arhangay", "Bayan-Olgiy", "Bayanhongor", "Bulgan", "Darhan", "Dornod", "Dornogovi", "Dundgovi", "Dzavhan", "Erdenet", "Govi-Altay", "Hentiy", "Hovd", "Hovsgol", "Omnogovi", "Ovorhangay", "Selenge", "Suhbaatar", "Tov", "Ulaanbaatar", "Uvs"],
    "divider": false
},
{
    "name": "Montserrat",
    "states": ["Saint Anthony", "Saint Georges", "Saint Peter's"],
    "divider": false
},
{
    "name": "Morocco",
    "states": ["Agadir", "Al Hoceima", "Azilal", "Ben Slimane", "Beni Mellal", "Boulemane", "Casablanca", "Chaouen", "El Jadida", "El Kelaa des Srarhna", "Er Rachidia", "Essaouira", "Fes", "Figuig", "Guelmim", "Ifrane", "Kenitra", "Khemisset", "Khenifra", "Khouribga", "Laayoune", "Larache", "Marrakech", "Meknes", "Nador", "Ouarzazate", "Oujda", "Rabat-Sale", "Safi", "Settat", "Sidi Kacem", "Tan-Tan", "Tanger", "Taounate", "Taroudannt", "Tata", "Taza", "Tetouan", "Tiznit"],
    "divider": false
},
{
    "name": "Mozambique",
    "states": ["Cabo Delgado", "Gaza", "Inhambane", "Manica", "Maputo", "Nampula", "Niassa", "Sofala", "Tete", "Zambezia"],
    "divider": false
},
{
    "name": "Namibia",
    "states": ["Caprivi", "Erongo", "Hardap", "Karas", "Khomas", "Kunene", "Ohangwena", "Okavango", "Omaheke", "Omusati", "Oshana", "Oshikoto", "Otjozondjupa"],
    "divider": false
},
{
    "name": "Nauru",
    "states": ["Aiwo", "Anabar", "Anetan", "Anibare", "Baiti", "Boe", "Buada", "Denigomodu", "Ewa", "Ijuw", "Meneng", "Nibok", "Uaboe", "Yaren"],
    "divider": false
},
{
    "name": "Nepal",
    "states": ["Bagmati", "Bheri", "Dhawalagiri", "Gandaki", "Janakpur", "Karnali", "Kosi", "Lumbini", "Mahakali", "Mechi", "Narayani", "Rapti", "Sagarmatha", "Seti"],
    "divider": false
},
{
    "name": "Netherlands",
    "states": ["Drenthe", "Flevoland", "Friesland", "Gelderland", "Groningen", "Limburg", "Noord-Brabant", "Noord-Holland", "Overijssel", "Utrecht", "Zeeland", "Zuid-Holland"],
    "divider": false
},
{
    "name": "Netherlands Antilles",
    "states": ["Netherlands Antilles"],
    "divider": false
},
{
    "name": "New Caledonia",
    "states": ["Iles Loyaute", "Nord", "Sud"],
    "divider": false
},
{
    "name": "New Zealand",
    "states": ["Akaroa", "Amuri", "Ashburton", "Bay of Islands", "Bruce", "Buller", "Chatham Islands", "Cheviot", "Clifton", "Clutha", "Cook", "Dannevirke", "Egmont", "Eketahuna", "Ellesmere", "Eltham", "Eyre", "Featherston", "Franklin", "Golden Bay", "Great Barrier Island", "Grey", "Hauraki Plains", "Hawera", "Hawke's Bay", "Heathcote", "Hikurangi", "Hobson", "Hokianga", "Horowhenua", "Hurunui", "Hutt", "Inangahua", "Inglewood", "Kaikoura", "Kairanga", "Kiwitea", "Lake", "Mackenzie", "Malvern", "Manaia", "Manawatu", "Mangonui", "Maniototo", "Marlborough", "Masterton", "Matamata", "Mount Herbert", "Ohinemuri", "Opotiki", "Oroua", "Otamatea", "Otorohanga", "Oxford", "Pahiatua", "Paparua", "Patea", "Piako", "Pohangina", "Raglan", "Rangiora", "Rangitikei", "Rodney", "Rotorua", "Runanga", "Saint Kilda", "Silverpeaks", "Southland", "Stewart Island", "Stratford", "Strathallan", "Taranaki", "Taumarunui", "Taupo", "Tauranga", "Thames-Coromandel", "Tuapeka", "Vincent", "Waiapu", "Waiheke", "Waihemo", "Waikato", "Waikohu", "Waimairi", "Waimarino", "Waimate", "Waimate West", "Waimea", "Waipa", "Waipawa", "Waipukurau", "Wairarapa South", "Wairewa", "Wairoa", "Waitaki", "Waitomo", "Waitotara", "Wallace", "Wanganui", "Waverley", "Westland", "Whakatane", "Whangarei", "Whangaroa", "Woodville"],
    "divider": false
},
{
    "name": "Nicaragua",
    "states": ["Atlantico Norte", "Atlantico Sur", "Boaco", "Carazo", "Chinandega", "Chontales", "Esteli", "Granada", "Jinotega", "Leon", "Madriz", "Managua", "Masaya", "Matagalpa", "Nueva Segovia", "Rio San Juan", "Rivas"],
    "divider": false
},
{
    "name": "Niger",
    "states": ["Agadez", "Diffa", "Dosso", "Maradi", "Niamey", "Tahoua", "Tillaberi", "Zinder"],
    "divider": false
},
{
    "name": "Nigeria",
    "states": ["Abia", "Abuja Federal Capital Territory", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nassarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"],
    "divider": false
},
{
    "name": "Niue",
    "states": ["Niue"],
    "divider": false
},
{
    "name": "Norfolk Island",
    "states": ["Norfolk Island"],
    "divider": false
},
{
    "name": "Northern Mariana Islands",
    "states": ["Northern Islands", "Rota", "Saipan", "Tinian"],
    "divider": false
},
{
    "name": "Norway",
    "states": ["Akershus", "Aust-Agder", "Buskerud", "Finnmark", "Hedmark", "Hordaland", "More og Romsdal", "Nord-Trondelag", "Nordland", "Oppland", "Oslo", "Ostfold", "Rogaland", "Sogn og Fjordane", "Sor-Trondelag", "Telemark", "Troms", "Vest-Agder", "Vestfold"],
    "divider": false
},
{
    "name": "Oman",
    "states": ["Ad Dakhiliyah", "Al Batinah", "Al Wusta", "Ash Sharqiyah", "Az Zahirah", "Masqat", "Musandam", "Zufar"],
    "divider": false
},
{
    "name": "Pakistan",
    "states": ["Balochistan", "Federally Administered Tribal Areas", "Islamabad Capital Territory", "North-West Frontier Province", "Punjab", "Sindh"],
    "divider": false
},
{
    "name": "Palau",
    "states": ["Aimeliik", "Airai", "Angaur", "Hatobohei", "Kayangel", "Koror", "Melekeok", "Ngaraard", "Ngarchelong", "Ngardmau", "Ngatpang", "Ngchesar", "Ngeremlengui", "Ngiwal", "Palau Island", "Peleliu", "Sonsoral", "Tobi"],
    "divider": false
},
{
    "name": "Panama",
    "states": ["Bocas del Toro", "Chiriqui", "Cocle", "Colon", "Darien", "Herrera", "Los Santos", "Panama", "San Blas", "Veraguas"],
    "divider": false
},
{
    "name": "Papua New Guinea",
    "states": ["Bougainville", "Central", "Chimbu", "East New Britain", "East Sepik", "Eastern Highlands", "Enga", "Gulf", "Madang", "Manus", "Milne Bay", "Morobe", "National Capital", "New Ireland", "Northern", "Sandaun", "Southern Highlands", "West New Britain", "Western", "Western Highlands"],
    "divider": false
},
{
    "name": "Paraguay",
    "states": ["Alto Paraguay", "Alto Parana", "Amambay", "Asuncion (city)", "Boqueron", "Caaguazu", "Caazapa", "Canindeyu", "Central", "Concepcion", "Cordillera", "Guaira", "Itapua", "Misiones", "Neembucu", "Paraguari", "Presidente Hayes", "San Pedro"],
    "divider": false
},
{
    "name": "Peru",
    "states": ["Amazonas", "Ancash", "Apurimac", "Arequipa", "Ayacucho", "Cajamarca", "Callao", "Cusco", "Huancavelica", "Huanuco", "Ica", "Junin", "La Libertad", "Lambayeque", "Lima", "Loreto", "Madre de Dios", "Moquegua", "Pasco", "Piura", "Puno", "San Martin", "Tacna", "Tumbes", "Ucayali"],
    "divider": false
},
{
    "name": "Philippines",
    "states": ["Abra", "Agusan del Norte", "Agusan del Sur", "Aklan", "Albay", "Angeles", "Antique", "Aurora", "Bacolod", "Bago", "Baguio", "Bais", "Basilan", "Basilan City", "Bataan", "Batanes", "Batangas", "Batangas City", "Benguet", "Bohol", "Bukidnon", "Bulacan", "Butuan", "Cabanatuan", "Cadiz", "Cagayan", "Cagayan de Oro", "Calbayog", "Caloocan", "Camarines Norte", "Camarines Sur", "Camiguin", "Canlaon", "Capiz", "Catanduanes", "Cavite", "Cavite City", "Cebu", "Cebu City", "Cotabato", "Dagupan", "Danao", "Dapitan", "Davao City Davao", "Davao del Sur", "Davao Oriental", "Dipolog", "Dumaguete", "Eastern Samar", "General Santos", "Gingoog", "Ifugao", "Iligan", "Ilocos Norte", "Ilocos Sur", "Iloilo", "Iloilo City", "Iriga", "Isabela", "Kalinga-Apayao", "La Carlota", "La Union", "Laguna", "Lanao del Norte", "Lanao del Sur", "Laoag", "Lapu-Lapu", "Legaspi", "Leyte", "Lipa", "Lucena", "Maguindanao", "Mandaue", "Manila", "Marawi", "Marinduque", "Masbate", "Mindoro Occidental", "Mindoro Oriental", "Misamis Occidental", "Misamis Oriental", "Mountain", "Naga", "Negros Occidental", "Negros Oriental", "North Cotabato", "Northern Samar", "Nueva Ecija", "Nueva Vizcaya", "Olongapo", "Ormoc", "Oroquieta", "Ozamis", "Pagadian", "Palawan", "Palayan", "Pampanga", "Pangasinan", "Pasay", "Puerto Princesa", "Quezon", "Quezon City", "Quirino", "Rizal", "Romblon", "Roxas", "Samar", "San Carlos (in Negros Occidental)", "San Carlos (in Pangasinan)", "San Jose", "San Pablo", "Silay", "Siquijor", "Sorsogon", "South Cotabato", "Southern Leyte", "Sultan Kudarat", "Sulu", "Surigao", "Surigao del Norte", "Surigao del Sur", "Tacloban", "Tagaytay", "Tagbilaran", "Tangub", "Tarlac", "Tawitawi", "Toledo", "Trece Martires", "Zambales", "Zamboanga", "Zamboanga del Norte", "Zamboanga del Sur"],
    "divider": false
},
{
    "name": "Pitcaim Islands",
    "states": ["Pitcaim Islands"],
    "divider": false
},
{
    "name": "Poland",
    "states": ["Dolnoslaskie", "Kujawsko-Pomorskie", "Lodzkie", "Lubelskie", "Lubuskie", "Malopolskie", "Mazowieckie", "Opolskie", "Podkarpackie", "Podlaskie", "Pomorskie", "Slaskie", "Swietokrzyskie", "Warminsko-Mazurskie", "Wielkopolskie", "Zachodniopomorskie"],
    "divider": false
},
{
    "name": "Portugal",
    "states": ["Acores (Azores)", "Aveiro", "Beja", "Braga", "Braganca", "Castelo Branco", "Coimbra", "Evora", "Faro", "Guarda", "Leiria", "Lisboa", "Madeira", "Portalegre", "Porto", "Santarem", "Setubal", "Viana do Castelo", "Vila Real", "Viseu"],
    "divider": false
},
{
    "name": "Puerto Rico",
    "states": ["Adjuntas", "Aguada", "Aguadilla", "Aguas Buenas", "Aibonito", "Anasco", "Arecibo", "Arroyo", "Barceloneta", "Barranquitas", "Bayamon", "Cabo Rojo", "Caguas", "Camuy", "Canovanas", "Carolina", "Catano", "Cayey", "Ceiba", "Ciales", "Cidra", "Coamo", "Comerio", "Corozal", "Culebra", "Dorado", "Fajardo", "Florida", "Guanica", "Guayama", "Guayanilla", "Guaynabo", "Gurabo", "Hatillo", "Hormigueros", "Humacao", "Isabela", "Jayuya", "Juana Diaz", "Juncos", "Lajas", "Lares", "Las Marias", "Las Piedras", "Loiza", "Luquillo", "Manati", "Maricao", "Maunabo", "Mayaguez", "Moca", "Morovis", "Naguabo", "Naranjito", "Orocovis", "Patillas", "Penuelas", "Ponce", "Quebradillas", "Rincon", "Rio Grande", "Sabana Grande", "Salinas", "San German", "San Juan", "San Lorenzo", "San Sebastian", "Santa Isabel", "Toa Alta", "Toa Baja", "Trujillo Alto", "Utuado", "Vega Alta", "Vega Baja", "Vieques", "Villalba", "Yabucoa", "Yauco"],
    "divider": false
},
{
    "name": "Qatar",
    "states": ["Ad Dawhah", "Al Ghuwayriyah", "Al Jumayliyah", "Al Khawr", "Al Wakrah", "Ar Rayyan", "Jarayan al Batinah", "Madinat ash Shamal", "Umm Salal"],
    "divider": false
},
{
    "name": "Reunion",
    "states": ["Reunion"],
    "divider": false
},
{
    "name": "Romainia",
    "states": ["Alba", "Arad", "Arges", "Bacau", "Bihor", "Bistrita-Nasaud", "Botosani", "Braila", "Brasov", "Bucuresti", "Buzau", "Calarasi", "Caras-Severin", "Cluj", "Constanta", "Covasna", "Dimbovita", "Dolj", "Galati", "Giurgiu", "Gorj", "Harghita", "Hunedoara", "Ialomita", "Iasi", "Maramures", "Mehedinti", "Mures", "Neamt", "Olt", "Prahova", "Salaj", "Satu Mare", "Sibiu", "Suceava", "Teleorman", "Timis", "Tulcea", "Vaslui", "Vilcea", "Vrancea"],
    "divider": false
},
{
    "name": "Russia",
    "states": ["Adygeya (Maykop)", "Aginskiy Buryatskiy (Aginskoye)", "Altay (Gorno-Altaysk)", "Altayskiy (Barnaul)", "Amurskaya (Blagoveshchensk)", "Arkhangel'skaya", "Astrakhanskaya", "Bashkortostan (Ufa)", "Belgorodskaya", "Bryanskaya", "Buryatiya (Ulan-Ude)", "Chechnya (Groznyy)", "Chelyabinskaya", "Chitinskaya", "Chukotskiy (Anadyr')", "Chuvashiya (Cheboksary)", "Dagestan (Makhachkala)", "Evenkiyskiy (Tura)", "Ingushetiya (Nazran')", "Irkutskaya", "Ivanovskaya", "Kabardino-Balkariya (Nal'chik)", "Kaliningradskaya", "Kalmykiya (Elista)", "Kaluzhskaya", "Kamchatskaya (Petropavlovsk-Kamchatskiy)", "Karachayevo-Cherkesiya (Cherkessk)", "Kareliya (Petrozavodsk)", "Kemerovskaya", "Khabarovskiy", "Khakasiya (Abakan)", "Khanty-Mansiyskiy (Khanty-Mansiysk)", "Kirovskaya", "Komi (Syktyvkar)", "Komi-Permyatskiy (Kudymkar)", "Koryakskiy (Palana)", "Kostromskaya", "Krasnodarskiy", "Krasnoyarskiy", "Kurganskaya", "Kurskaya", "Leningradskaya", "Lipetskaya", "Magadanskaya", "Mariy-El (Yoshkar-Ola)", "Mordoviya (Saransk)", "Moskovskaya", "Moskva (Moscow)", "Murmanskaya", "Nenetskiy (Nar'yan-Mar)", "Nizhegorodskaya", "Novgorodskaya", "Novosibirskaya", "Omskaya", "Orenburgskaya", "Orlovskaya (Orel)", "Penzenskaya", "Permskaya", "Primorskiy (Vladivostok)", "Pskovskaya", "Rostovskaya", "Ryazanskaya", "Sakha (Yakutsk)", "Sakhalinskaya (Yuzhno-Sakhalinsk)", "Samarskaya", "Sankt-Peterburg (Saint Petersburg)", "Saratovskaya", "Severnaya Osetiya-Alaniya [North Ossetia] (Vladikavkaz)", "Smolenskaya", "Stavropol'skiy", "Sverdlovskaya (Yekaterinburg)", "Tambovskaya", "Tatarstan (Kazan')", "Taymyrskiy (Dudinka)", "Tomskaya", "Tul'skaya", "Tverskaya", "Tyumenskaya", "Tyva (Kyzyl)", "Udmurtiya (Izhevsk)", "Ul'yanovskaya", "Ust'-Ordynskiy Buryatskiy (Ust'-Ordynskiy)", "Vladimirskaya", "Volgogradskaya", "Vologodskaya", "Voronezhskaya", "Yamalo-Nenetskiy (Salekhard)", "Yaroslavskaya", "Yevreyskaya"],
    "divider": false
},
{
    "name": "Rwanda",
    "states": ["Butare", "Byumba", "Cyangugu", "Gikongoro", "Gisenyi", "Gitarama", "Kibungo", "Kibuye", "Kigali Rurale", "Kigali-ville", "Ruhengeri", "Umutara"],
    "divider": false
},
{
    "name": "Saint Helena",
    "states": ["Ascension", "Saint Helena", "Tristan da Cunha"],
    "divider": false
},
{
    "name": "Saint Kitts and Nevis",
    "states": ["Christ Church Nichola Town", "Saint Anne Sandy Point", "Saint George Basseterre", "Saint George Gingerland", "Saint James Windward", "Saint John Capisterre", "Saint John Figtree", "Saint Mary Cayon", "Saint Paul Capisterre", "Saint Paul Charlestown", "Saint Peter Basseterre", "Saint Thomas Lowland", "Saint Thomas Middle Island", "Trinity Palmetto Point"],
    "divider": false
},
{
    "name": "Saint Lucia",
    "states": ["Anse-la-Raye", "Castries", "Choiseul", "Dauphin", "Dennery", "Gros Islet", "Laborie", "Micoud", "Praslin", "Soufriere", "Vieux Fort"],
    "divider": false
},
{
    "name": "Saint Pierre and Miquelon",
    "states": ["Miquelon", "Saint Pierre"],
    "divider": false
},
{
    "name": "Saint Vincent and the Grenadines",
    "states": ["Charlotte", "Grenadines", "Saint Andrew", "Saint David", "Saint George", "Saint Patrick"],
    "divider": false
},
{
    "name": "Samoa",
    "states": ["A'ana", "Aiga-i-le-Tai", "Atua", "Fa'asaleleaga", "Gaga'emauga", "Gagaifomauga", "Palauli", "Satupa'itea", "Tuamasaga", "Va'a-o-Fonoti", "Vaisigano"],
    "divider": false
},
{
    "name": "San Marino",
    "states": ["Acquaviva", "Borgo Maggiore", "Chiesanuova", "Domagnano", "Faetano", "Fiorentino", "Monte Giardino", "San Marino", "Serravalle"],
    "divider": false
},
{
    "name": "Sao Tome and Principe",
    "states": ["Principe", "Sao Tome"],
    "divider": false
},
{
    "name": "Saudi Arabia",
    "states": ["'Asir", "Al Bahah", "Al Hudud ash Shamaliyah", "Al Jawf", "Al Madinah", "Al Qasim", "Ar Riyad", "Ash Sharqiyah (Eastern Province)", "Ha'il", "Jizan", "Makkah", "Najran", "Tabuk"],
    "divider": false
},
{
    "name": "Scotland",
    "states": ["Aberdeen City", "Aberdeenshire", "Angus", "Argyll and Bute", "City of Edinburgh", "Clackmannanshire", "Dumfries and Galloway", "Dundee City", "East Ayrshire", "East Dunbartonshire", "East Lothian", "East Renfrewshire", "Eilean Siar (Western Isles)", "Falkirk", "Fife", "Glasgow City", "Highland", "Inverclyde", "Midlothian", "Moray", "North Ayrshire", "North Lanarkshire", "Orkney Islands", "Perth and Kinross", "Renfrewshire", "Shetland Islands", "South Ayrshire", "South Lanarkshire", "Stirling", "The Scottish Borders", "West Dunbartonshire", "West Lothian"],
    "divider": false
},
{
    "name": "Senegal",
    "states": ["Dakar", "Diourbel", "Fatick", "Kaolack", "Kolda", "Louga", "Saint-Louis", "Tambacounda", "Thies", "Ziguinchor"],
    "divider": false
},
{
    "name": "Seychelles",
    "states": ["Anse aux Pins", "Anse Boileau", "Anse Etoile", "Anse Louis", "Anse Royale", "Baie Lazare", "Baie Sainte Anne", "Beau Vallon", "Bel Air", "Bel Ombre", "Cascade", "Glacis", "Grand' Anse (on Mahe)", "Grand' Anse (on Praslin)", "La Digue", "La Riviere Anglaise", "Mont Buxton", "Mont Fleuri", "Plaisance", "Pointe La Rue", "Port Glaud", "Saint Louis", "Takamaka"],
    "divider": false
},
{
    "name": "Sierra Leone",
    "states": ["Eastern", "Northern", "Southern", "Western"],
    "divider": false
},
{
    "name": "Singapore",
    "states": ["Singapore"],
    "divider": false
},
{
    "name": "Slovakia",
    "states": ["Banskobystricky", "Bratislavsky", "Kosicky", "Nitriansky", "Presovsky", "Trenciansky", "Trnavsky", "Zilinsky"],
    "divider": false
},
{
    "name": "Slovenia",
    "states": ["Ajdovscina", "Beltinci", "Bled", "Bohinj", "Borovnica", "Bovec", "Brda", "Brezice", "Brezovica", "Cankova-Tisina", "Celje", "Cerklje na Gorenjskem", "Cerknica", "Cerkno", "Crensovci", "Crna na Koroskem", "Crnomelj", "Destrnik-Trnovska Vas", "Divaca", "Dobrepolje", "Dobrova-Horjul-Polhov Gradec", "Dol pri Ljubljani", "Domzale", "Dornava", "Dravograd", "Duplek", "Gorenja Vas-Poljane", "Gorisnica", "Gornja Radgona", "Gornji Grad", "Gornji Petrovci", "Grosuplje", "Hodos Salovci", "Hrastnik", "Hrpelje-Kozina", "Idrija", "Ig", "Ilirska Bistrica", "Ivancna Gorica", "Izola", "Jesenice", "Jursinci", "Kamnik", "Kanal", "Kidricevo", "Kobarid", "Kobilje", "Kocevje", "Komen", "Koper", "Kozje", "Kranj", "Kranjska Gora", "Krsko", "Kungota", "Kuzma", "Lasko", "Lenart", "Lendava", "Litija", "Ljubljana", "Ljubno", "Ljutomer", "Logatec", "Loska Dolina", "Loski Potok", "Luce", "Lukovica", "Majsperk", "Maribor", "Medvode", "Menges", "Metlika", "Mezica", "Miren-Kostanjevica", "Mislinja", "Moravce", "Moravske Toplice", "Mozirje", "Murska Sobota", "Muta", "Naklo", "Nazarje", "Nova Gorica", "Novo Mesto", "Odranci", "Ormoz", "Osilnica", "Pesnica", "Piran", "Pivka", "Podcetrtek", "Podvelka-Ribnica", "Postojna", "Preddvor", "Ptuj", "Puconci", "Race-Fram", "Radece", "Radenci", "Radlje ob Dravi", "Radovljica", "Ravne-Prevalje", "Ribnica", "Rogasevci", "Rogaska Slatina", "Rogatec", "Ruse", "Semic", "Sencur", "Sentilj", "Sentjernej", "Sentjur pri Celju", "Sevnica", "Sezana", "Skocjan", "Skofja Loka", "Skofljica", "Slovenj Gradec", "Slovenska Bistrica", "Slovenske Konjice", "Smarje pri Jelsah", "Smartno ob Paki", "Sostanj", "Starse", "Store", "Sveti Jurij", "Tolmin", "Trbovlje", "Trebnje", "Trzic", "Turnisce", "Velenje", "Velike Lasce", "Videm", "Vipava", "Vitanje", "Vodice", "Vojnik", "Vrhnika", "Vuzenica", "Zagorje ob Savi", "Zalec", "Zavrc", "Zelezniki", "Ziri", "Zrece"],
    "divider": false
},
{
    "name": "Solomon Islands",
    "states": ["Bellona", "Central", "Choiseul (Lauru)", "Guadalcanal", "Honiara", "Isabel", "Makira", "Malaita", "Rennell", "Temotu", "Western"],
    "divider": false
},
{
    "name": "Somalia",
    "states": ["Awdal", "Bakool", "Banaadir", "Bari", "Bay", "Galguduud", "Gedo", "Hiiraan", "Jubbada Dhexe", "Jubbada Hoose", "Mudug", "Nugaal", "Sanaag", "Shabeellaha Dhexe", "Shabeellaha Hoose", "Sool", "Togdheer", "Woqooyi Galbeed"],
    "divider": false
},
{
    "name": "South Africa",
    "states": ["Eastern Cape", "Free State", "Gauteng", "KwaZulu-Natal", "Mpumalanga", "North-West", "Northern Cape", "Northern Province", "Western Cape"],
    "divider": false
},
{
    "name": "South Georgia and South Sandwich Islands",
    "states": ["Bird Island", "Bristol Island", "Clerke Rocks", "Montagu Island", "Saunders Island", "South Georgia", "Southern Thule", "Traversay Islands"],
    "divider": false
},
{
    "name": "Spain",
    "states": ["Andalucia", "Aragon", "Asturias", "Baleares (Balearic Islands)", "Canarias (Canary Islands)", "Cantabria", "Castilla y Leon", "Castilla-La Mancha", "Cataluna", "Ceuta", "Communidad Valencian", "Extremadura", "Galicia", "Islas Chafarinas", "La Rioja", "Madrid", "Melilla", "Murcia", "Navarra", "Pais Vasco (Basque Country)", "Penon de Alhucemas", "Penon de Velez de la Gomera"],
    "divider": false
},
{
    "name": "Spratly Islands",
    "states": ["Spratly Islands"],
    "divider": false
},
{
    "name": "Sri Lanka",
    "states": ["Central", "Eastern", "North Central", "North Eastern", "North Western", "Northern", "Sabaragamuwa", "Southern", "Uva", "Western"],
    "divider": false
},
{
    "name": "Sudan",
    "states": ["A'ali an Nil", "Al Bahr al Ahmar", "Al Buhayrat", "Al Jazirah", "Al Khartum", "Al Qadarif", "Al Wahdah", "An Nil al Abyad", "An Nil al Azraq", "Ash Shamaliyah", "Bahr al Jabal", "Gharb al Istiwa'iyah", "Gharb Bahr al Ghazal", "Gharb Darfur", "Gharb Kurdufan", "Janub Darfur", "Janub Kurdufan", "Junqali", "Kassala", "Nahr an Nil", "Shamal Bahr al Ghazal", "Shamal Darfur", "Shamal Kurdufan", "Sharq al Istiwa'iyah", "Sinnar", "Warab"],
    "divider": false
},
{
    "name": "Suriname",
    "states": ["Brokopondo", "Commewijne", "Coronie", "Marowijne", "Nickerie", "Para", "Paramaribo", "Saramacca", "Sipaliwini", "Wanica"],
    "divider": false
},
{
    "name": "Svalbard",
    "states": ["Barentsoya", "Bjornoya", "Edgeoya", "Hopen", "Kvitoya", "Nordaustandet", "Prins Karls Forland", "Spitsbergen"],
    "divider": false
},
{
    "name": "Swaziland",
    "states": ["Hhohho", "Lubombo", "Manzini", "Shiselweni"],
    "divider": false
},
{
    "name": "Sweden",
    "states": ["Blekinge", "Dalarnas", "Gavleborgs", "Gotlands", "Hallands", "Jamtlands", "Jonkopings", "Kalmar", "Kronobergs", "Norrbottens", "Orebro", "Ostergotlands", "Skane", "Sodermanlands", "Stockholms", "Uppsala", "Varmlands", "Vasterbottens", "Vasternorrlands", "Vastmanlands", "Vastra Gotalands"],
    "divider": false
},
{
    "name": "Switzerland",
    "states": ["Aargau", "Ausser-Rhoden", "Basel-Landschaft", "Basel-Stadt", "Bern", "Fribourg", "Geneve", "Glarus", "Graubunden", "Inner-Rhoden", "Jura", "Luzern", "Neuchatel", "Nidwalden", "Obwalden", "Sankt Gallen", "Schaffhausen", "Schwyz", "Solothurn", "Thurgau", "Ticino", "Uri", "Valais", "Vaud", "Zug", "Zurich"],
    "divider": false
},
{
    "name": "Syria",
    "states": ["Al Hasakah", "Al Ladhiqiyah", "Al Qunaytirah", "Ar Raqqah", "As Suwayda'", "Dar'a", "Dayr az Zawr", "Dimashq", "Halab", "Hamah", "Hims", "Idlib", "Rif Dimashq", "Tartus"],
    "divider": false
},
{
    "name": "Taiwan",
    "states": ["Chang-hua", "Chi-lung", "Chia-i", "Chia-i", "Chung-hsing-hsin-ts'un", "Hsin-chu", "Hsin-chu", "Hua-lien", "I-lan", "Kao-hsiung", "Kao-hsiung", "Miao-li", "Nan-t'ou", "P'eng-hu", "P'ing-tung", "T'ai-chung", "T'ai-chung", "T'ai-nan", "T'ai-nan", "T'ai-pei", "T'ai-pei", "T'ai-tung", "T'ao-yuan", "Yun-lin"],
    "divider": false
},
{
    "name": "Tajikistan",
    "states": ["Viloyati Khatlon", "Viloyati Leninobod", "Viloyati Mukhtori Kuhistoni Badakhshon"],
    "divider": false
},
{
    "name": "Tanzania",
    "states": ["Arusha", "Dar es Salaam", "Dodoma", "Iringa", "Kagera", "Kigoma", "Kilimanjaro", "Lindi", "Mara", "Mbeya", "Morogoro", "Mtwara", "Mwanza", "Pemba North", "Pemba South", "Pwani", "Rukwa", "Ruvuma", "Shinyanga", "Singida", "Tabora", "Tanga", "Zanzibar Central/South", "Zanzibar North", "Zanzibar Urban/West"],
    "divider": false
},
{
    "name": "Thailand",
    "states": ["Amnat Charoen", "Ang Thong", "Buriram", "Chachoengsao", "Chai Nat", "Chaiyaphum", "Chanthaburi", "Chiang Mai", "Chiang Rai", "Chon Buri", "Chumphon", "Kalasin", "Kamphaeng Phet", "Kanchanaburi", "Khon Kaen", "Krabi", "Krung Thep Mahanakhon (Bangkok)", "Lampang", "Lamphun", "Loei", "Lop Buri", "Mae Hong Son", "Maha Sarakham", "Mukdahan", "Nakhon Nayok", "Nakhon Pathom", "Nakhon Phanom", "Nakhon Ratchasima", "Nakhon Sawan", "Nakhon Si Thammarat", "Nan", "Narathiwat", "Nong Bua Lamphu", "Nong Khai", "Nonthaburi", "Pathum Thani", "Pattani", "Phangnga", "Phatthalung", "Phayao", "Phetchabun", "Phetchaburi", "Phichit", "Phitsanulok", "Phra Nakhon Si Ayutthaya", "Phrae", "Phuket", "Prachin Buri", "Prachuap Khiri Khan", "Ranong", "Ratchaburi", "Rayong", "Roi Et", "Sa Kaeo", "Sakon Nakhon", "Samut Prakan", "Samut Sakhon", "Samut Songkhram", "Sara Buri", "Satun", "Sing Buri", "Sisaket", "Songkhla", "Sukhothai", "Suphan Buri", "Surat Thani", "Surin", "Tak", "Trang", "Trat", "Ubon Ratchathani", "Udon Thani", "Uthai Thani", "Uttaradit", "Yala", "Yasothon"],
    "divider": false
},
{
    "name": "Tobago",
    "states": ["Tobago"],
    "divider": false
},
{
    "name": "Toga",
    "states": ["De La Kara", "Des Plateaux", "Des Savanes", "Du Centre", "Maritime"],
    "divider": false
},
{
    "name": "Tokelau",
    "states": ["Atafu", "Fakaofo", "Nukunonu"],
    "divider": false
},
{
    "name": "Tonga",
    "states": ["Ha'apai", "Tongatapu", "Vava'u"],
    "divider": false
},
{
    "name": "Trinidad",
    "states": ["Arima", "Caroni", "Mayaro", "Nariva", "Port-of-Spain", "Saint Andrew", "Saint David", "Saint George", "Saint Patrick", "San Fernando", "Victoria"],
    "divider": false
},
{
    "name": "Tunisia",
    "states": ["Ariana", "Beja", "Ben Arous", "Bizerte", "El Kef", "Gabes", "Gafsa", "Jendouba", "Kairouan", "Kasserine", "Kebili", "Mahdia", "Medenine", "Monastir", "Nabeul", "Sfax", "Sidi Bou Zid", "Siliana", "Sousse", "Tataouine", "Tozeur", "Tunis", "Zaghouan"],
    "divider": false
},
{
    "name": "Turkey",
    "states": ["Adana", "Adiyaman", "Afyon", "Agri", "Aksaray", "Amasya", "Ankara", "Antalya", "Ardahan", "Artvin", "Aydin", "Balikesir", "Bartin", "Batman", "Bayburt", "Bilecik", "Bingol", "Bitlis", "Bolu", "Burdur", "Bursa", "Canakkale", "Cankiri", "Corum", "Denizli", "Diyarbakir", "Duzce", "Edirne", "Elazig", "Erzincan", "Erzurum", "Eskisehir", "Gaziantep", "Giresun", "Gumushane", "Hakkari", "Hatay", "Icel", "Igdir", "Isparta", "Istanbul", "Izmir", "Kahramanmaras", "Karabuk", "Karaman", "Kars", "Kastamonu", "Kayseri", "Kilis", "Kirikkale", "Kirklareli", "Kirsehir", "Kocaeli", "Konya", "Kutahya", "Malatya", "Manisa", "Mardin", "Mugla", "Mus", "Nevsehir", "Nigde", "Ordu", "Osmaniye", "Rize", "Sakarya", "Samsun", "Sanliurfa", "Siirt", "Sinop", "Sirnak", "Sivas", "Tekirdag", "Tokat", "Trabzon", "Tunceli", "Usak", "Van", "Yalova", "Yozgat", "Zonguldak"],
    "divider": false
},
{
    "name": "Turkmenistan",
    "states": ["Ahal Welayaty", "Balkan Welayaty", "Dashhowuz Welayaty", "Lebap Welayaty", "Mary Welayaty"],
    "divider": false
},
{
    "name": "Tuvalu",
    "states": ["Tuvalu"],
    "divider": false
},
{
    "name": "Uganda",
    "states": ["Adjumani", "Apac", "Arua", "Bugiri", "Bundibugyo", "Bushenyi", "Busia", "Gulu", "Hoima", "Iganga", "Jinja", "Kabale", "Kabarole", "Kalangala", "Kampala", "Kamuli", "Kapchorwa", "Kasese", "Katakwi", "Kibale", "Kiboga", "Kisoro", "Kitgum", "Kotido", "Kumi", "Lira", "Luwero", "Masaka", "Masindi", "Mbale", "Mbarara", "Moroto", "Moyo", "Mpigi", "Mubende", "Mukono", "Nakasongola", "Nebbi", "Ntungamo", "Pallisa", "Rakai", "Rukungiri", "Sembabule", "Soroti", "Tororo"],
    "divider": false
},
{
    "name": "Ukraine",
    "states": ["Avtonomna Respublika Krym (Simferopol')", "Cherkas'ka (Cherkasy)", "Chernihivs'ka (Chernihiv)", "Chernivets'ka (Chernivtsi)", "Dnipropetrovs'ka (Dnipropetrovs'k)", "Donets'ka (Donets'k)", "Ivano-Frankivs'ka (Ivano-Frankivs'k)", "Kharkivs'ka (Kharkiv)", "Khersons'ka (Kherson)", "Khmel'nyts'ka (Khmel'nyts'kyy)", "Kirovohrads'ka (Kirovohrad)", "Kyyiv", "Kyyivs'ka (Kiev)", "L'vivs'ka (L'viv)", "Luhans'ka (Luhans'k)", "Mykolayivs'ka (Mykolayiv)", "Odes'ka (Odesa)", "Poltavs'ka (Poltava)", "Rivnens'ka (Rivne)", "Sevastopol'", "Sums'ka (Sumy)", "Ternopil's'ka (Ternopil')", "Vinnyts'ka (Vinnytsya)", "Volyns'ka (Luts'k)", "Zakarpats'ka (Uzhhorod)", "Zaporiz'ka (Zaporizhzhya)", "Zhytomyrs'ka (Zhytomyr)"],
    "divider": false
},
{
    "name": "United Arab Emirates",
    "states": ["'Ajman", "Abu Zaby (Abu Dhabi)", "Al Fujayrah", "Ash Shariqah (Sharjah)", "Dubayy (Dubai)", "Ra's al Khaymah", "Umm al Qaywayn"],
    "divider": false
},
{
    "name": "Uruguay",
    "states": ["Artigas", "Canelones", "Cerro Largo", "Colonia", "Durazno", "Flores", "Florida", "Lavalleja", "Maldonado", "Montevideo", "Paysandu", "Rio Negro", "Rivera", "Rocha", "Salto", "San Jose", "Soriano", "Tacuarembo", "Treinta y Tres"],
    "divider": false
},
{
    "name": "Uzbekistan",
    "states": ["Andijon Wiloyati", "Bukhoro Wiloyati", "Farghona Wiloyati", "Jizzakh Wiloyati", "Khorazm Wiloyati (Urganch)", "Namangan Wiloyati", "Nawoiy Wiloyati", "Qashqadaryo Wiloyati (Qarshi)", "Qoraqalpoghiston (Nukus)", "Samarqand Wiloyati", "Sirdaryo Wiloyati (Guliston)", "Surkhondaryo Wiloyati (Termiz)", "Toshkent Shahri", "Toshkent Wiloyati"],
    "divider": false
},
{
    "name": "Vanuatu",
    "states": ["Malampa", "Penama", "Sanma", "Shefa", "Tafea", "Torba"],
    "divider": false
},
{
    "name": "Venezuela",
    "states": ["Amazonas", "Anzoategui", "Apure", "Aragua", "Barinas", "Bolivar", "Carabobo", "Cojedes", "Delta Amacuro", "Dependencias Federales", "Distrito Federal", "Falcon", "Guarico", "Lara", "Merida", "Miranda", "Monagas", "Nueva Esparta", "Portuguesa", "Sucre", "Tachira", "Trujillo", "Vargas", "Yaracuy", "Zulia"],
    "divider": false
},
{
    "name": "Vietnam",
    "states": ["An Giang", "Ba Ria-Vung Tau", "Bac Giang", "Bac Kan", "Bac Lieu", "Bac Ninh", "Ben Tre", "Binh Dinh", "Binh Duong", "Binh Phuoc", "Binh Thuan", "Ca Mau", "Can Tho", "Cao Bang", "Da Nang", "Dac Lak", "Dong Nai", "Dong Thap", "Gia Lai", "Ha Giang", "Ha Nam", "Ha Noi", "Ha Tay", "Ha Tinh", "Hai Duong", "Hai Phong", "Ho Chi Minh", "Hoa Binh", "Hung Yen", "Khanh Hoa", "Kien Giang", "Kon Tum", "Lai Chau", "Lam Dong", "Lang Son", "Lao Cai", "Long An", "Nam Dinh", "Nghe An", "Ninh Binh", "Ninh Thuan", "Phu Tho", "Phu Yen", "Quang Binh", "Quang Nam", "Quang Ngai", "Quang Ninh", "Quang Tri", "Soc Trang", "Son La", "Tay Ninh", "Thai Binh", "Thai Nguyen", "Thanh Hoa", "Thua Thien-Hue", "Tien Giang", "Tra Vinh", "Tuyen Quang", "Vinh Long", "Vinh Phuc", "Yen Bai"],
    "divider": false
},
{
    "name": "Virgin Islands",
    "states": ["Saint Croix", "Saint John", "Saint Thomas"],
    "divider": false
},
{
    "name": "Wales",
    "states": ["Blaenau Gwent", "Bridgend", "Caerphilly", "Cardiff", "Carmarthenshire", "Ceredigion", "Conwy", "Denbighshire", "Flintshire", "Gwynedd", "Isle of Anglesey", "Merthyr Tydfil", "Monmouthshire", "Neath Port Talbot", "Newport", "Pembrokeshire", "Powys", "Rhondda Cynon Taff", "Swansea", "The Vale of Glamorgan", "Torfaen", "Wrexham"],
    "divider": false
},
{
    "name": "Wallis and Futuna",
    "states": ["Alo", "Sigave", "Wallis"],
    "divider": false
},
{
    "name": "West Bank",
    "states": ["West Bank"],
    "divider": false
},
{
    "name": "Western Sahara",
    "states": ["Western Sahara"],
    "divider": false
},
{
    "name": "Yemen",
    "states": ["'Adan", "'Ataq", "Abyan", "Al Bayda'", "Al Hudaydah", "Al Jawf", "Al Mahrah", "Al Mahwit", "Dhamar", "Hadhramawt", "Hajjah", "Ibb", "Lahij", "Ma'rib", "Sa'dah", "San'a'", "Ta'izz"],
    "divider": false
},
{
    "name": "Yugoslavia",
    "states": ["Kosovo", "Montenegro", "Serbia", "Vojvodina"],
    "divider": false
},
{
    "name": "Zambia",
    "states": ["Central", "Copperbelt", "Eastern", "Luapula", "Lusaka", "North-Western", "Northern", "Southern", "Western"],
    "divider": false
},
{
    "name": "Zimbabwe",
    "states": ["Bulawayo", "Harare", "Manicaland", "Mashonaland Central", "Mashonaland East", "Mashonaland West", "Masvingo", "Matabeleland North", "Matabeleland South", "Midlands"],
    "divider": false
}];

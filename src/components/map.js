import React, { useState } from 'react';
import axios from 'axios';
import WorldMap from "react-svg-worldmap";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCountryData } from '../redux/action';
import "../css/map.css";
import Alert from './alert';
function Map() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [showAlert, setShowAlert] = useState(false);
  const data = [
    { "country": "af", "name": "Afghanistan", "value": 100 },
    { "country": "al", "name": "Albania", "value": 100 },
    { "country": "dz", "name": "Algeria", "value": 100 },
    { "country": "as", "name": "American Samoa", "value": 100 },
    { "country": "ad", "name": "Andorra", "value": 100 },
    { "country": "ao", "name": "Angola", "value": 100 },
    { "country": "ai", "name": "Anguilla", "value": 100 },
    { "country": "aq", "name": "Antarctica", "value": 100 },
    { "country": "ag", "name": "Antigua and Barbuda", "value": 100 },
    { "country": "ar", "name": "Argentina", "value": 100 },
    { "country": "am", "name": "Armenia", "value": 100 },
    { "country": "aw", "name": "Aruba", "value": 100 },
    { "country": "au", "name": "Australia", "value": 100 },
    { "country": "at", "name": "Austria", "value": 100 },
    { "country": "az", "name": "Azerbaijan", "value": 100 },
    { "country": "bs", "name": "Bahamas", "value": 100 },
    { "country": "bh", "name": "Bahrain", "value": 100 },
    { "country": "bd", "name": "Bangladesh", "value": 100 },
    { "country": "bb", "name": "Barbados", "value": 100 },
    { "country": "by", "name": "Belarus", "value": 100 },
    { "country": "be", "name": "Belgium", "value": 100 },
    { "country": "bz", "name": "Belize", "value": 100 },
    { "country": "bj", "name": "Benin", "value": 100 },
    { "country": "bm", "name": "Bermuda", "value": 100 },
    { "country": "bt", "name": "Bhutan", "value": 100 },
    { "country": "bo", "name": "Bolivia", "value": 100 },
    { "country": "ba", "name": "Bosnia and Herzegovina", "value": 100 },
    { "country": "bw", "name": "Botswana", "value": 100 },
    { "country": "br", "name": "Brazil", "value": 100 },
    { "country": "io", "name": "British Indian Ocean Territory", "value": 100 },
    { "country": "vg", "name": "British Virgin Islands", "value": 100 },
    { "country": "bn", "name": "Brunei", "value": 100 },
    { "country": "bg", "name": "Bulgaria", "value": 100 },
    { "country": "bf", "name": "Burkina Faso", "value": 100 },
    { "country": "bi", "name": "Burundi", "value": 100 },
    { "country": "cv", "name": "Cabo Verde", "value": 100 },
    { "country": "kh", "name": "Cambodia", "value": 100 },
    { "country": "cm", "name": "Cameroon", "value": 100 },
    { "country": "ca", "name": "Canada", "value": 100 },
    { "country": "ky", "name": "Cayman Islands", "value": 100 },
    { "country": "cf", "name": "Central African Republic", "value": 100 },
    { "country": "td", "name": "Chad", "value": 100 },
    { "country": "cl", "name": "Chile", "value": 100 },
    { "country": "cn", "name": "China", "value": 100 },
    { "country": "cx", "name": "Christmas Island", "value": 100 },
    { "country": "cc", "name": "Cocos (Keeling) Islands", "value": 100 },
    { "country": "co", "name": "Colombia", "value": 100 },
    { "country": "km", "name": "Comoros", "value": 100 },
    { "country": "cd", "name": "Congo (DRC)", "value": 100 },
    { "country": "cg", "name": "Congo (Republic)", "value": 100 },
    { "country": "ck", "name": "Cook Islands", "value": 100 },
    { "country": "cr", "name": "Costa Rica", "value": 100 },
    { "country": "ci", "name": "Côte d’Ivoire", "value": 100 },
    { "country": "hr", "name": "Croatia", "value": 100 },
    { "country": "cu", "name": "Cuba", "value": 100 },
    { "country": "cw", "name": "Curaçao", "value": 100 },
    { "country": "cy", "name": "Cyprus", "value": 100 },
    { "country": "cz", "name": "Czechia", "value": 100 },
    { "country": "dk", "name": "Denmark", "value": 100 },
    { "country": "dj", "name": "Djibouti", "value": 100 },
    { "country": "dm", "name": "Dominica", "value": 100 },
    { "country": "do", "name": "Dominican Republic", "value": 100 },
    { "country": "ec", "name": "Ecuador", "value": 100 },
    { "country": "eg", "name": "Egypt", "value": 100 },
    { "country": "sv", "name": "El Salvador", "value": 100 },
    { "country": "gq", "name": "Equatorial Guinea", "value": 100 },
    { "country": "er", "name": "Eritrea", "value": 100 },
    { "country": "ee", "name": "Estonia", "value": 100 },
    { "country": "sz", "name": "Eswatini", "value": 100 },
    { "country": "et", "name": "Ethiopia", "value": 100 },
    { "country": "fk", "name": "Falkland Islands", "value": 100 },
    { "country": "fo", "name": "Faroe Islands", "value": 100 },
    { "country": "fj", "name": "Fiji", "value": 100 },
    { "country": "fi", "name": "Finland", "value": 100 },
    { "country": "fr", "name": "France", "value": 100 },
    { "country": "gf", "name": "French Guiana", "value": 100 },
    { "country": "pf", "name": "French Polynesia", "value": 100 },
    { "country": "tf", "name": "French Southern Territories", "value": 100 },
    { "country": "ga", "name": "Gabon", "value": 100 },
    { "country": "gm", "name": "Gambia", "value": 100 },
    { "country": "ge", "name": "Georgia", "value": 100 },
    { "country": "de", "name": "Germany", "value": 100 },
    { "country": "gh", "name": "Ghana", "value": 100 },
    { "country": "gi", "name": "Gibraltar", "value": 100 },
    { "country": "gr", "name": "Greece", "value": 100 },
    { "country": "gl", "name": "Greenland", "value": 100 },
    { "country": "gd", "name": "Grenada", "value": 100 },
    { "country": "gp", "name": "Guadeloupe", "value": 100 },
    { "country": "gu", "name": "Guam", "value": 100 },
    { "country": "gt", "name": "Guatemala", "value": 100 },
    { "country": "gg", "name": "Guernsey", "value": 100 },
    { "country": "gn", "name": "Guinea", "value": 100 },
    { "country": "gw", "name": "Guinea-Bissau", "value": 100 },
    { "country": "gy", "name": "Guyana", "value": 100 },
    { "country": "ht", "name": "Haiti", "value": 100 },
    { "country": "hn", "name": "Honduras", "value": 100 },
    { "country": "hk", "name": "Hong Kong", "value": 100 },
    { "country": "hu", "name": "Hungary", "value": 100 },
    { "country": "is", "name": "Iceland", "value": 100 },
    { "country": "in", "name": "India", "value": 100 },
    { "country": "id", "name": "Indonesia", "value": 100 },
    { "country": "ir", "name": "Iran", "value": 100 },
    { "country": "iq", "name": "Iraq", "value": 100 },
    { "country": "ie", "name": "Ireland", "value": 100 },
    { "country": "im", "name": "Isle of Man", "value": 100 },
    { "country": "il", "name": "Israel", "value": 100 },
    { "country": "it", "name": "Italy", "value": 100 },
    { "country": "jm", "name": "Jamaica", "value": 100 },
    { "country": "jp", "name": "Japan", "value": 100 },
    { "country": "je", "name": "Jersey", "value": 100 },
    { "country": "jo", "name": "Jordan", "value": 100 },
    { "country": "kz", "name": "Kazakhstan", "value": 100 },
    { "country": "ke", "name": "Kenya", "value": 100 },
    { "country": "ki", "name": "Kiribati", "value": 100 },
    { "country": "kp", "name": "Korea (North)", "value": 100 },
    { "country": "kr", "name": "Korea (South)", "value": 100 },
    { "country": "kw", "name": "Kuwait", "value": 100 },
    { "country": "kg", "name": "Kyrgyzstan", "value": 100 },
    { "country": "la", "name": "Laos", "value": 100 },
    { "country": "lv", "name": "Latvia", "value": 100 },
    { "country": "lb", "name": "Lebanon", "value": 100 },
    { "country": "ls", "name": "Lesotho", "value": 100 },
    { "country": "lr", "name": "Liberia", "value": 100 },
    { "country": "ly", "name": "Libya", "value": 100 },
    { "country": "li", "name": "Liechtenstein", "value": 100 },
    { "country": "lt", "name": "Lithuania", "value": 100 },
    { "country": "lu", "name": "Luxembourg", "value": 100 },
    { "country": "mo", "name": "Macao", "value": 100 },
    { "country": "mg", "name": "Madagascar", "value": 100 },
    { "country": "mw", "name": "Malawi", "value": 100 },
    { "country": "my", "name": "Malaysia", "value": 100 },
    { "country": "mv", "name": "Maldives", "value": 100 },
    { "country": "ml", "name": "Mali", "value": 100 },
    { "country": "mt", "name": "Malta", "value": 100 },
    { "country": "mh", "name": "Marshall Islands", "value": 100 },
    { "country": "mq", "name": "Martinique", "value": 100 },
    { "country": "mr", "name": "Mauritania", "value": 100 },
    { "country": "mu", "name": "Mauritius", "value": 100 },
    { "country": "yt", "name": "Mayotte", "value": 100 },
    { "country": "mx", "name": "Mexico", "value": 100 },
    { "country": "fm", "name": "Micronesia", "value": 100 },
    { "country": "md", "name": "Moldova", "value": 100 },
    { "country": "mc", "name": "Monaco", "value": 100 },
    { "country": "mn", "name": "Mongolia", "value": 100 },
    { "country": "me", "name": "Montenegro", "value": 100 },
    { "country": "ms", "name": "Montserrat", "value": 100 },
    { "country": "ma", "name": "Morocco", "value": 100 },
    { "country": "mz", "name": "Mozambique", "value": 100 },
    { "country": "mm", "name": "Myanmar", "value": 100 },
    { "country": "na", "name": "Namibia", "value": 100 },
    { "country": "nr", "name": "Nauru", "value": 100 },
    { "country": "np", "name": "Nepal", "value": 100 },
    { "country": "nl", "name": "Netherlands", "value": 100 },
    { "country": "nc", "name": "New Caledonia", "value": 100 },
    { "country": "nz", "name": "New Zealand", "value": 100 },
    { "country": "ni", "name": "Nicaragua", "value": 100 },
    { "country": "ne", "name": "Niger", "value": 100 },
    { "country": "ng", "name": "Nigeria", "value": 100 },
    { "country": "nu", "name": "Niue", "value": 100 },
    { "country": "nf", "name": "Norfolk Island", "value": 100 },
    { "country": "mp", "name": "Northern Mariana Islands", "value": 100 },
    { "country": "no", "name": "Norway", "value": 100 },
    { "country": "om", "name": "Oman", "value": 100 },
    { "country": "pk", "name": "Pakistan", "value": 100 },
    { "country": "pw", "name": "Palau", "value": 100 },
    { "country": "ps", "name": "Palestine", "value": 100 },
    { "country": "pa", "name": "Panama", "value": 100 },
    { "country": "pg", "name": "Papua New Guinea", "value": 100 },
    { "country": "py", "name": "Paraguay", "value": 100 },
    { "country": "pe", "name": "Peru", "value": 100 },
    { "country": "ph", "name": "Philippines", "value": 100 },
    { "country": "pn", "name": "Pitcairn Islands", "value": 100 },
    { "country": "pl", "name": "Poland", "value": 100 },
    { "country": "pt", "name": "Portugal", "value": 100 },
    { "country": "pr", "name": "Puerto Rico", "value": 100 },
    { "country": "qa", "name": "Qatar", "value": 100 },
    { "country": "re", "name": "Réunion", "value": 100 },
    { "country": "ro", "name": "Romania", "value": 100 },
    { "country": "ru", "name": "Russia", "value": 100 },
    { "country": "rw", "name": "Rwanda", "value": 100 },
    { "country": "ws", "name": "Samoa", "value": 100 },
    { "country": "sm", "name": "San Marino", "value": 100 },
    { "country": "st", "name": "São Tomé and Príncipe", "value": 100 },
    { "country": "sa", "name": "Saudi Arabia", "value": 100 },
    { "country": "sn", "name": "Senegal", "value": 100 },
    { "country": "rs", "name": "Serbia", "value": 100 },
    { "country": "sc", "name": "Seychelles", "value": 100 },
    { "country": "sl", "name": "Sierra Leone", "value": 100 },
    { "country": "sg", "name": "Singapore", "value": 100 },
    { "country": "sx", "name": "Sint Maarten", "value": 100 },
    { "country": "sk", "name": "Slovakia", "value": 100 },
    { "country": "si", "name": "Slovenia", "value": 100 },
    { "country": "sb", "name": "Solomon Islands", "value": 100 },
    { "country": "so", "name": "Somalia", "value": 100 },
    { "country": "za", "name": "South Africa", "value": 100 },
    { "country": "kr", "name": "South Korea", "value": 100 },
    { "country": "ss", "name": "South Sudan", "value": 100 },
    { "country": "es", "name": "Spain", "value": 100 },
    { "country": "lk", "name": "Sri Lanka", "value": 100 },
    { "country": "sd", "name": "Sudan", "value": 100 },
    { "country": "sr", "name": "Suriname", "value": 100 },
    { "country": "se", "name": "Sweden", "value": 100 },
    { "country": "ch", "name": "Switzerland", "value": 100 },
    { "country": "sy", "name": "Syria", "value": 100 },
    { "country": "tw", "name": "Taiwan", "value": 100 },
    { "country": "tj", "name": "Tajikistan", "value": 100 },
    { "country": "tz", "name": "Tanzania", "value": 100 },
    { "country": "th", "name": "Thailand", "value": 100 },
    { "country": "tl", "name": "Timor-Leste", "value": 100 },
    { "country": "tg", "name": "Togo", "value": 100 },
    { "country": "tk", "name": "Tokelau", "value": 100 },
    { "country": "to", "name": "Tonga", "value": 100 },
    { "country": "tt", "name": "Trinidad and Tobago", "value": 100 },
    { "country": "tn", "name": "Tunisia", "value": 100 },
    { "country": "tr", "name": "Turkey", "value": 100 },
    { "country": "tm", "name": "Turkmenistan", "value": 100 },
    { "country": "tv", "name": "Tuvalu", "value": 100 },
    { "country": "ug", "name": "Uganda", "value": 100 },
    { "country": "ua", "name": "Ukraine", "value": 100 },
    { "country": "ae", "name": "United Arab Emirates", "value": 100 },
    { "country": "gb", "name": "United Kingdom", "value": 100 },
    { "country": "us", "name": "United States", "value": 100 },
    { "country": "uy", "name": "Uruguay", "value": 100 },
    { "country": "uz", "name": "Uzbekistan", "value": 100 },
    { "country": "vu", "name": "Vanuatu", "value": 100 },
    { "country": "ve", "name": "Venezuela", "value": 100 },
    { "country": "vn", "name": "Vietnam", "value": 100 },
    { "country": "eh", "name": "Western Sahara", "value": 100 },
    { "country": "ye", "name": "Yemen", "value": 100 },
    { "country": "zm", "name": "Zambia", "value": 100 },
    { "country": "zw", "name": "Zimbabwe", "value": 100 }
  ];

  return (
    <div className="map-container">
      {/* {showAlert && <Alert message={'There is no information about this country'} onClose={() => setShowAlert(false)} />} */}
      <WorldMap
        color="red"
        title="Top 10 Populous Countries"
        valueSuffix="people"
        size="xl"
        data={data}
        className="world-map"
        onClickFunction={(e) => {

          axios.get('https://covid-19-statistics.p.rapidapi.com/regions', {
            headers: {
              'x-rapidapi-key': '48fd0a9458mshec0ec2919e02a11p10cf0cjsn6d4c4f224d03',
              'x-rapidapi-host': 'covid-19-statistics.p.rapidapi.com'
            }
          }).then(response => {
            const newData = response.data.data.filter((item) => {
              return item.name === e.countryName;
            })
            if (newData.length > 0) {
              axios.get(`https://covid-19-statistics.p.rapidapi.com/reports?iso=${newData[0].iso}`, {
                headers: {
                  "x-rapidapi-key": "48fd0a9458mshec0ec2919e02a11p10cf0cjsn6d4c4f224d03",
                  "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
                }
              }).then(result => {
                console.log(result);
                dispatch(setCountryData(result.data));
                // if (result.data > 0) {
                  navigate(`/country/${newData[0].iso}`);
                // } else {
                //   setShowAlert(true);
                // }
              })
            }
          });
        }}
      />
    </div>
  );
}

export default Map;

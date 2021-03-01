import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Guest from "../components/Guest";
// import SearchResults from "../components/SearchResults";
// import API from "../utils/API";

function RSVP() {
  // let [fullName, setFullName] = useState({});
  // let [lastName, setLastName] = useState({});
  // let [partyNum, setPartyNum] = useState();

  // function handleChange(e) {
  //   let { name, value } = e.target;

  //   if (name === "fullName") {
  //     setFullName({ [name]: value });
  //   } else if (name === "partySize") {
  //     setPartyNum({ [name]: value });
  //   }
  // }
  function validEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
  }

  function getFormData(form) {
    var elements = form.elements;

    var fields = Object.keys(elements)
      .filter(function (k) {
        return elements[k].name !== "honeypot";
      })
      // eslint-disable-next-line
      .map(function (k) {
        if (elements[k].name !== undefined) {
          return elements[k].name;
          // special case for Edge's html collection
        } else if (elements[k].length > 0) {
          return elements[k].item(0).name;
        }
      })
      .filter(function (item, pos, self) {
        return self.indexOf(item) === pos && item;
      });
    var formData = {};
    fields.forEach(function (name) {
      var element = elements[name];
      // singular form elements just have one value
      formData[name] = element.value;
      // when our element has multiple items, get their values
      if (element.length) {
        var data = [];
        for (var i = 0; i < element.length; i++) {
          var item = element.item(i);
          if (item.checked || item.selected) {
            data.push(item.value);
          }
        }
        formData[name] = data.join(", ");
      }
    });
    // add form-specific values into the data
    formData.formDataNameOrder = JSON.stringify(fields);
    formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
    formData.formGoogleSendEmail = form.dataset.email || ""; // no email by default
    return formData;
  }
  function handleSubmit(event) {
    // handles form submit without any jquery
    event.preventDefault(); // we are submitting via xhr below
    var form = event.target;
    var data = getFormData(form); // get the values submitted in the form
    /* OPTION: Remove this comment to enable SPAM prevention, see README.md
    if (validateHuman(data.honeypot)) {  //if form is filled, form will not be submitted
      return false;
    }
    */
    console.log(form, data);
    if (data.email && !validEmail(data.email)) {
      // if email is not valid show error
      var invalidEmail = form.querySelector(".email-invalid");
      if (invalidEmail) {
        invalidEmail.style.display = "block";
        return false;
      }
    } else {
      disableAllButtons(form);
      var url = form.action;
      // console.log(url);
      var xhr = new XMLHttpRequest();
      xhr.open("POST", url);
      // xhr.withCredentials = true;
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.onreadystatechange = function () {
        var formElements = form.querySelector(".form-elements");
        if (formElements) {
          formElements.style.display = "none"; // hide form
        }
        var thankYouMessage = form.querySelector(".thankyou_message");
        if (thankYouMessage) {
          thankYouMessage.style.display = "block";
        }
        return;
      };
      // url encode form data for sending as post data
      var encoded = Object.keys(data)
        .map(function (k) {
          return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
        })
        .join("&");
      xhr.send(encoded);
    }
  }
  function loaded() {
    // console.log("Contact form submission handler loaded successfully.");
    // bind to the submit event of our form
    var forms = document.querySelectorAll("form.gform");
    for (var i = 0; i < forms.length; i++) {
      forms[i].addEventListener("submit", handleSubmit, false);
    }
  }
  document.addEventListener("DOMContentLoaded", loaded, false);
  function disableAllButtons(form) {
    var buttons = form.querySelectorAll("button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
  }

  // function handleSubmit(event) {
  //   event.preventDefault();

  //   // let name = Object.values(firstName) + " " + Object.values(lastName);
  //   // // TODO
  //   // // Make the form lowercase (make everything is lowercase)
  //   // console.log(name);

  //   // API.findGuest(name).then((res) => {
  //   //   setGuest(res.data);
  //   // });
  // }

  // function selectOnlyThis(id) {
  //   let idIndex = parseInt(id.split("_")[1]);
  //   // console.log(id);
  //   let otherID =
  //     id === `decline_${idIndex}` ? `accept_${idIndex}` : `decline_${idIndex}`;
  //   // console.log(guest);
  //   // console.log(typeof id.split("_")[1]);
  //   // console.log(otherID);

  //   if (document.getElementById(id).checked) {
  //     document.getElementById(id).checked = true;
  //     document.getElementById(otherID).checked = false;
  //     // console.log(document.getElementById(id).value);
  //     guest[idIndex].attendence = document.getElementById(id).value;
  //     // console.log(guest[idIndex]);
  //     API.update(guest[idIndex]);
  //     // .then((res) => console.log(res.data));
  //   } else {
  //     document.getElementById(id).checked = false;
  //   }
  // }

  return (
    <div>
      <Header />
      <Navbar />
      <Guest handleSubmit={handleSubmit} />
      {/* {guest ? (handleChange={handleChange}
        <SearchResults selectOnlyThis={selectOnlyThis} results={guest} />
      ) : (
        ""
      )} */}
      <Footer />
    </div>
  );
}

export default RSVP;

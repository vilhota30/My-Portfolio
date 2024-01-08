import { BiFemale } from "react-icons/bi";
import { BiMailSend } from "react-icons/bi";
import { BiPhoneCall } from "react-icons/bi";
import { BiAnchor } from "react-icons/bi";
import { BiGlobe } from "react-icons/bi";
import { BiGroup } from "react-icons/bi";

const aboutMeInfo = [
    {
        index: 7,
        section_one: [
          {
            index: 1,
            data_type: "Age",
            data_value: "23",
            data_icon: BiGroup,
          },
          {
            index: 2,
            data_type: "Gender",
            data_value: "female",
            data_icon: BiFemale,
          },
          {
            index: 3,
            data_type: "Languages",
            data_value: "Ukraine/English",
            data_icon: BiGlobe,
          },
        ],
        section_two: [
            {
              index: 4,
              data_type: "Phone",
              data_value: "+380501466598",
              icon_class: "fa-solid fa-phone-flip",
              ic_color: "#e64a19",
              data_icon: BiPhoneCall,
            },
            {
              index: 5,
              data_type: "Email",
              data_value: "nirodalinagmail.com",
              icon_class: "fa-solid fa-envelope",
              ic_color: "#00838F",
              data_icon: BiMailSend,
            },
            {
              index: 6,
              data_type: "Address",
              data_value: "Vinogradiv, Ukraine",
              icon_class: "fa-sharp fa-solid fa-location-dot",
              ic_color: "rgb(34 119 0)",
              data_icon: BiAnchor,
            },
        ],
    }
];

export default aboutMeInfo;
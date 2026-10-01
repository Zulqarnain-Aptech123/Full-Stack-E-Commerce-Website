import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa";

const CountryDropdown = () => {
    return (
        <Button className="countryDropDown">

            <div className="info d-flex flex-column">

                <span className="label">
                    Your Location
                </span>

                <span className="countryName">
                    Select a Location
                </span>

            </div>

            <span className="ml-auto">
                <FaAngleDown />
            </span>

        </Button>
    );
};

export default CountryDropdown;
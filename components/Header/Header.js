import classes from './Header.module.css';
import nookies from 'nookies';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

// List of Countries
const countryList = [
    { label: 'jp', name: 'Japan' },
    { label: 'kr', name: 'Korea' },
    { label: 'gb', name: 'United Kingdom' },
    { label: 'us', name: 'United States' }
]

const Header = (props) => {

    // Use useRouter from next/router
    const router = useRouter();

    // State
    const [country, setCountry]  = useState(router.query.country);

    // Handler
    const selectChangeHandler = (event) => {
        // Change country
        setCountry(event.target.value);

        // Redirect page
        router.push('/[country]', `/${event.target.value}`);
    }

    // Set cookie every time country value changes
    useEffect(() => {
        nookies.set(null, 'selectedCountry', country, {
            maxAge: 30 * 24 * 60 * 60,
            path: '/'
        })
    }, [country])

    return (
        <div className={classes.Header}>
            <select value={country} onChange={selectChangeHandler}>
            {
                // Map thru countryList
                countryList.map((country) => {
                    return <option key={country.label} value={country.label}>{country.name}</option>
                })
            }
            </select>
        </div>
    )
}

export default Header;
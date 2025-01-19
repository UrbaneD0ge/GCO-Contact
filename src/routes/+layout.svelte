<script>
    import { onMount } from 'svelte';

    onMount(() => {
        // get location permission
        navigator.permissions.query({name:'geolocation'}).then(function(result) {
            if (result.state === 'granted') {
                console.log('Permission granted');
            } else if (result.state === 'prompt') {
                console.log('Permission prompt');
            } else if (result.state === 'denied') {
                console.log('Permission denied');
            }
            result.onchange = function() {
                console.log('Permission ' + result.state);
            }
        });
    });
</script>

<nav>
    <a href="/" aria-labelledby="Home"><img id="homeLogo" src="./GCO logo with ghosted icons.png" alt="GA Commute Options Logo"/></a>
</nav>

<slot/>

<style>
    :root {
        --GCO-green: rgb(140,198,62);
        --GCO-greenTransp: rgba(140,198,62,0.5);
        --GCO-orange: rgb(233,94,35);
        --GCO-blue: rgb(23,117,187);
        --GCO-gray: rgb(40,42,40);
    }

    #homeLogo {
        width: 400px;
        /* center the image */
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    nav {
        background-color: #ffffff;
        padding: 1rem;
    }

    @media (max-width: 600px) {
        #homeLogo {
            width: 200px;
        }

        nav {
            padding: 0;
        }
    }
</style>
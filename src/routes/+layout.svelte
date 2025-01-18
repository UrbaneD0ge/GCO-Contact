<nav>
    <a href="/" aria-labelledby="Home"><img id="homeLogo" src="./GCO logo with ghosted icons.png" alt="GA Commute Options Logo"/></a>
    <ul>
        <li><a href="/about">About</a></li>
    </ul>
</nav>

<slot/>

<style>
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

    ul {
        display: flex;
        gap: 1rem;
        list-style: none;
        justify-content: space-around;
    }

    li {
        font-size: 1.25rem;
    }

</style>
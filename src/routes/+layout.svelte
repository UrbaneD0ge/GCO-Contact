<nav>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
    </ul>
</nav>

<slot/>

<style>
    nav {
        background-color: #f0f0f0;
        padding: 1rem;
    }

    ul {
        display: flex;
        gap: 1rem;
        list-style: none;
    }

    li {
        font-size: 1.25rem;
    }

</style>
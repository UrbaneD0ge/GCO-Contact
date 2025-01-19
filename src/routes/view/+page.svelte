<script>
    export let data;
</script>

<main>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Created At</th>
            </tr>
        </thead>
        <tbody>

    {#each data.contacts as row}
        <tr>
            <td>{row.name}</td>
            <td><a href="mailto:{row.email}">{row.email}</a></td>
            <td>{row.created_at}</td>
        </tr>
    {/each}
        </tbody>
    </table>
</main>

<style>
    main {
        display: flex;
        justify-content: center;
    }
    table {
        width: 80%;
        border-collapse: collapse;
    }

    th, td {
        border: 1px solid #8b8b8b;
        padding: 0.5rem;
        text-align: center;
    }

    th {
        background-color: var(--GCO-green);
    }

    tr:hover {
        background-color: #f2f2f2;
    }

    tr:nth-child(even) {
        background-color: #f2f2f2;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
</style>
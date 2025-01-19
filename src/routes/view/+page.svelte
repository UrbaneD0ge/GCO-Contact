<script>
    export let data;
    // Array of GCO reps - used to display the name of the rep based on the rep_id index
    let reps = ["Kip", "Aaron", "Alyssa", "Brenden", "Courtney", "Shayla", "Tiffany"];
</script>

<main>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Location</th>
                <th>GCO Rep</th>
                <th>Created At</th>
            </tr>
        </thead>
        <tbody>

    {#each data.contacts as row}
        <tr>
            <td>{row.name}</td>
            <td><a href="mailto:{row.email}">{row.email}</a></td>
            <td><a href="https://www.google.com/maps/@{row.latitude},{row.longitude}" target="_blank" noopener>{(row.latitude && row.longitude !== '0') ? "📌" : "✖️"}</a></td>
            <td>{reps[row.rep_id]}</td>
            <td>{new Date(row.created_at).toLocaleString()}</td>
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
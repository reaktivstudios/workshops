<h2>Contrast Issue</h2>
<table>
    <thead>
        <tr>
            <th scope="col">Issue</th>
            <th scope="col">Suggested Remediation</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">There is no focus indicator for the following button</th>
            <td>Either use the default focus indicator or provide one that meets minimum contrast.</td>
        </tr>
    </tbody>
</table>
<h3>Example</h3>
<div class="no-outline">
    <button>Button Text</button>
</div>
<style>
    .no-outline button {
        outline: none;
    }

    .default-outline button:focus {
        outline: auto;
    }

    .custom-outline button {
        outline: none;
    }

    .custom-outline button:focus {
        outline: 2px dashed #fff;
        outline-offset: 2px;
    }
</style>
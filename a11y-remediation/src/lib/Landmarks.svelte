<section aria-labelledby="landmarks">
    <h2 id="landmarks">Landmarks Issue</h2>
    <table>
        <thead>
            <tr>
                <th scope="col">Issue</th>
                <th scope="col">Suggested Remediation</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">The logo and page title are not in a landmark</th>
                <td>Change the div to a <code>&lt;header&gt;</code>.</td>
            </tr>
        </tbody>
    </table>
    <h3>Example</h3>
    <div class="bad-tab-order">
        <button class="third">Third</button>
        <button class="first">First</button>
        <button class="second">Second</button>
    </div>
</section>

<style>
    .bad-tab-order {
        display: flex;
    }

    .third {
        order: 3;
    }
</style>

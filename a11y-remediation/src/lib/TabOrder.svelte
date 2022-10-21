<h2>Tab Order Issue</h2>
<table>
    <thead>
        <tr>
            <th scope="col">Issue</th>
            <th scope="col">Suggested Remediation</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">The button tab order is wrong</th>
            <td>Move the HTML for the third button to the end of the list so that the tab order makes logical sense. Remove the order rule from the CSS.</td>
        </tr>
    </tbody>
</table>
<h3>Example</h3>
<div class="bad-tab-order">
    <button class="third">Third</button>
    <button class="first">First</button>
    <button class="second">Second</button>
</div>
<style>
    .bad-tab-order {
        display: flex;
    }

    .third {
        order: 3;
    }
</style>
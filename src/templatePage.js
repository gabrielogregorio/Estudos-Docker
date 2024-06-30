const templatePage = (listUsers) => `
<style>
html {
  box-sizing: border-box;
  font-size: 16px;
};

*, *:before, *:after {
  box-sizing: inherit;
};

body, h1, p {
  margin: 0;
  padding: 0;
  font-weight: normal;  
}
</style>

<h1>Full Cycle Rocks!</h1>
<ul> ${listUsers} </ul>`;

module.exports = templatePage;

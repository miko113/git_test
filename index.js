const bulb = document.getElementById("bulb");

bulb.addEventListener('click', function(event) {
    fetch('https://shelly-52-eu.shelly.cloud/device/relay/control', {
        method: 'POST',
        body: new URLSearchParams({
            'channel': '0',
            'turn': 'on',
            'id': '4855199a8c10',
            'auth_key': 'MTQ4Nzk5dWlk885F74AA4DBC003E80B434D92796BCC79D6414A1B72193FE1381DD97D3696DFAE90D73195CD2AEF5'
        })
    });

    bulb.setAttribute("src", "on.png");

    setTimeout(() => {
        bulb.setAttribute("src", "off.png");
      }, "3000")
});



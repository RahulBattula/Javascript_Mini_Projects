const primeMembership = document.getElementById('membership');
const cod = document.getElementById('cod');
const upi = document.getElementById('UPI');
const bankTransfer = document.getElementById('bankTransfer');
const payButton = document.getElementById('payBtn');
const primeResponse = document.getElementById('primeResponse');
const payResponse = document.getElementById('payResponse');
let primeMember = false;
let isPaymentSuccessful = false;

payButton.onclick = function() {
    if(primeMembership.checked) {
        primeResponse.textContent = 'You are a Prime member now!';
        primeMember = true;
        primeResponse.style.color = 'blue';
    }
    else{
        primeResponse.textContent = 'Prime membership not selected!';
        primeResponse.style.color = 'black';
    }

    if(cod.checked) {
        payResponse.textContent = 'Order placed using Cash on Delivery.';
        isPaymentSuccessful = true;
    }
    else if(upi.checked) {
        payResponse.textContent = 'Payment done via UPI.';
        isPaymentSuccessful = true;
    }
    else if(bankTransfer.checked) {
        payResponse.textContent = 'Payment done via Bank Transfer.';
        isPaymentSuccessful = true;
    }
    else{
        payResponse.textContent = 'Unsuccessful Payment!'
    }


    if(isPaymentSuccessful) {
        payResponse.style.color = 'green';
    }
    else {
        payResponse.style.color = 'red'
    }
}
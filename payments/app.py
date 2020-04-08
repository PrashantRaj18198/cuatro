import razorpay
import json

from flask import Flask, render_template, request

app = Flask(__name__,static_folder = "static", static_url_path='')
razorpay_client = razorpay.Client(auth=("rzp_test_VdCgvaxDubfJRI", "uPW8gbnQkD54RL38niCe8GOe"))


@app.route('/')
def app_create():
    return render_template('app.html')


@app.route('/charge', methods=['POST'])
def app_charge():
    amount = 5100
    payment_id = request.form['razorpay_payment_id']
    razorpay_client.order.create
    print(request.form)
    try:
        razorpay_client.payment.capture(payment_id, amount)
    # print(message)
        return json.dumps(razorpay_client.payment.fetch(payment_id))
    except:
        return("error")

if __name__ == '__main__':
    app.run()

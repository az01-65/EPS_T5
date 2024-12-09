from flask import Flask, render_template

app = Flask(__name__, static_url_path='/static')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/solution')
def solutions():
    return render_template('solution.html')

@app.route('/future')
def future():
    return render_template('future.html')

@app.route('/fact')
def fact():
    return render_template('fact.html')

@app.route('/past')
def past():
    return render_template('past.html')

@app.route('/present')
def present():
    return render_template('present.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)

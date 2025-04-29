from flask import Flask, request, jsonify
import json
import random

app = Flask(__name__)  # <-- Corrected here!

# Load the chatbot intents and responses
with open('Chatbot.json') as f:
    chatbot_data = json.load(f)

@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json['message'].lower()
    print(f"User Input: {user_input}")  # Log user input

    best_match = None

    # Search for a matching intent
    for intent in chatbot_data['intents']:
        for pattern in intent['patterns']:
            if pattern.lower() in user_input:  # simple matching
                best_match = random.choice(intent['responses'])
                break
        if best_match:
            break

    if best_match:
        bot_response = best_match
    else:
        bot_response = "Sorry, I didn't understand. Can you rephrase?"

    return jsonify({"response": bot_response})

if __name__ == "__main__":
    app.run(debug=True)

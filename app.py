
import streamlit as st
import joblib
import numpy as np

# Load the trained model
model = joblib.load('model.joblib')

st.title("Iris Flower Species Prediction App")
st.write("This interactive web app uses a Random Forest Classifier to predict Iris flower species based on input features.")

# Input sliders for the features
sepal_length = st.slider('Sepal length (cm)', 4.0, 8.0, 5.4)
sepal_width = st.slider('Sepal width (cm)', 2.0, 4.4, 3.4)
petal_length = st.slider('Petal length (cm)', 1.0, 7.0, 1.3)
petal_width = st.slider('Petal width (cm)', 0.1, 2.5, 0.2)

# Make prediction
if st.button('Predict'):
    input_data = np.array([[sepal_length, sepal_width, petal_length, petal_width]])
    prediction = model.predict(input_data)
    species = ['Setosa', 'Versicolor', 'Virginica']
    
    st.success(f"The predicted species is: **{species[prediction[0]]}**")

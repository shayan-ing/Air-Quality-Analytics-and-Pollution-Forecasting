# 🌍 Air Quality Analytics & AQI Forecasting Platform

<p align="center">

![Python](https://img.shields.io/badge/Python-3.14-blue?logo=python)
![Streamlit](https://img.shields.io/badge/Streamlit-Dashboard-red?logo=streamlit)
![Scikit-Learn](https://img.shields.io/badge/Scikit--Learn-ML-orange?logo=scikitlearn)
![XGBoost](https://img.shields.io/badge/XGBoost-Ensemble-green)
![Prophet](https://img.shields.io/badge/Prophet-TimeSeries-purple)
![License](https://img.shields.io/badge/License-MIT-yellow)

</p>

---

# 📌 Project Overview

Air pollution has become one of the most pressing environmental challenges affecting public health and urban sustainability. This project presents an end-to-end **Air Quality Analytics & AQI Forecasting Platform** capable of analyzing historical air pollution trends and forecasting future Air Quality Index (AQI) values using Machine Learning and Time Series models.

The platform leverages pollutant concentrations and meteorological parameters to predict AQI and provides interactive visualizations through a Streamlit dashboard.

### Objectives

* Analyze historical air quality trends
* Detect seasonal pollution patterns
* Forecast AQI using ML and Time-Series models
* Compare model performance
* Provide health advisories based on AQI levels
* Support Smart Cities Mission and SDG Goals (3, 11, 13)

---

# 🛠 Tech Stack

### Programming Language

* Python 3.11

### Libraries

* Pandas
* NumPy
* Matplotlib
* Seaborn
* Plotly
* Scikit-Learn
* XGBoost
* Prophet
* Joblib
* Streamlit

### Models Used

✅ Random Forest Regressor

✅ XGBoost Regressor

✅ Prophet Forecasting Model

---

# 📊 Dataset

Source:

* OpenAQ API
* CPCB Historical AQI Data
* Kaggle India AQI Dataset

Dataset Size

* **201,664 rows**
* **25 features**

Selected City

* **Delhi, India**

Features include:

```text
PM2.5
PM10
NO₂
SO₂
CO
O₃
Temperature
Humidity
Wind Speed
Visibility
AQI
AQI Category
```

---

# 🧠 Machine Learning Pipeline

```text
Raw Dataset
        │
        ▼
EDA & Cleaning
        │
        ▼
Feature Engineering
        │
        ▼
Random Forest
        │
        ▼
XGBoost
        │
        ▼
Prophet
        │
        ▼
Model Comparison
        │
        ▼
Streamlit Dashboard
```

---

# 📈 Model Performance

| Model         | R² Score | MAE     | RMSE    |
| ------------- | -------- | ------- | ------- |
| Random Forest | 0.999999 | 0.0503  | 0.1656  |
| XGBoost       | 0.999983 | 0.4436  | 0.7344  |
| Prophet       | 0.926510 | 36.9273 | 48.4374 |

---

# 📂 Project Structure

```text
AirQualityProject/

│

├── data/

│   ├── raw/

│   └── processed/

│

├── models/

│   ├── random_forest.pkl

│   ├── xgboost.pkl

│   └── prophet_model.json

│

├── notebooks/

│   ├── 01_data_loading.ipynb

│   ├── 02_eda_preprocessing.ipynb

│   ├── 03_feature_engineering.ipynb

│   ├── 04_random_forest.ipynb

│   ├── 05_xgboost.ipynb

│   ├── 06_prophet.ipynb

│   └── 08_model_comparison.ipynb

│

├── dashboard/

│   └── app.py

│

├── reports/

│

├── presentation/

│

├── requirements.txt

│

└── README.md
```

---

# ⚙ Installation

Clone the repository

```bash
git clone https://github.com/yourusername/AirQualityAnalytics&PollutionForecasting.git
```

Move inside project directory

```bash
cd AirQualityProject
```

Install dependencies

```bash
pip install -r requirements.txt
```

---

# 🚀 Usage

Run Jupyter notebooks

```bash
jupyter notebook
```

Run Streamlit dashboard

```bash
streamlit run dashboard/app.py
```

---

# 📷 Screenshots

### Dashboard Overview

```text
(Add Screenshot Here)
```

---

### AQI Forecast

```text
(Add Screenshot Here)
```

---

### Feature Importance

```text
(Add Screenshot Here)
```

---

# 🌱 Sustainable Development Goals

This project contributes towards:

* SDG 3 → Good Health and Well-being
* SDG 11 → Sustainable Cities and Communities
* SDG 13 → Climate Action

---

# 👥 Contributors

| Name                  |
| --------------------- |
| Shayan Akhtar Abedeen |
| Aman Singh            |
| Aryan Singh           |

---

# 📜 License

This project is licensed under the **MIT License**.

Feel free to use, modify, and distribute this project for educational and research purposes.

---

<p align="center">

⭐ If you found this project useful, consider giving it a star!

</p>


Made with ❤️ for Smart Cities & SDG 3, 11, 13





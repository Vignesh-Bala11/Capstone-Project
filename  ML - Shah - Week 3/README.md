## Question-1 Race Predictability: Machine Learning Model

### Description of preliminary feature engineering and preliminary feature selection, including their decision-making process

The feature engineering and selection processes was determined by our exploratory analysis. As our analysis has shown, there is a strong correlation between starting position and winning the race. Similarly, there is strong correlation between constructor and driver with the likelihood of a “win” outcome. Therefore, we believe these were natural inclusions as features in our model. We used weather as an input because weather can play a part in any form of outdoor sporting event so we concluded that as another natural selection. We considered the altitudes of circuits and whether that could play a role in determining the outcome. However, as we can see in our exploratory analysis, there was no marked change in the performance of constructors which suggested that altitudes did not play a major role in performance of individual cars (aka any impact of altitude was either non-existent or universal). 

After the initial feature selection and engineering, we performed additional data processing to include secondary features such as driver age, driver’s number of wins and league position before the start of the race and constructor’s number of wins and league position before the race. After including them in our models, we noted that they did not lead to any improvements in our race predictions. As a result, when running our models, we excluded these secondary features and reverted back to our original features. 

Overall, the features or inputs used for our machine learnings models are: 
 - Year: denotes the year of the race
 - Round: denotes the nth number of race (the first race is round 1)
 - CircuitId: encoded number representing the circuit for the race
 - DriverId: encoded number representing the driver 
 - ConstructorId: encoded number representing the team/constructor
 - Grid: the starting position of the driver
 - Weather_warm: a binary response with 1 representing warm and 0 not warm
 - Weather_cold: a binary response with 1 representing cold and 0 not cold
 - Weather_dry: a binary response with 1 representing dry and 0 not dry
 - Weather_wet: a binary response with 1 representing wet and 0 not wet
 - Weather_cloudy: a binary response with 1 representing cloudy and 0 not cloudy

### Description of how data was split into training and testing sets

We split the training and testing datasets based on years. All data prior to the 2019 season was considered training dataset while the 2019 season racing outcomes were considered testing datasets.  The reason we are using years as a defining factor to split the two datasets is the impact it has on sports. Almost every competition is defined by the year-long schedule (aka a “season”) or small timeframe held a within a year (such as Olympics 2021 or FIFA World Cup 2018 which are held over consecutive months within the same calendar year). It is extremely rare for a competition winner to be decided based on performances over multiple years. Therefore, splitting datasets by year provides the best real-life use of any form of sporting outcome predictive model. Since the purpose of our machine learning model is to test a real theory that Formula 1 as a sport has become very predictable, we believe the success of our machine learning model’s ability to predict a full season’s outcome will provide far greater insight than its success based on random one-off races spread over multiple years. 

One way we tried to solve the disparity between using different years as test population and observe whether there were significant changes in our model’s performance. In addition to 2019, we used 2018 as a test population (2000-2017 as train population) and 2017 as test population (2000-2016) as test population. As we will show in our following sections, there weren’t significant fluctuations or fluctuations with a specific trend in the model’s performance which shows that using a single season as test population was appropriate. 

It should be noted that we selected the 2019 and not 2020 season (which is more recent) as our test set was due to the impact of Covid 19 on all sporting events. The 2020 season was cut short and held at one-off venues which were subsequently dropped from the calendar in 2021 as F1 got back to its regular calendar. 

### Explanation of model choice, including limitations and benefits AND Explanation of changes in the models from Segment 2 to Segment 3. 

The [ETL](https://github.com/Vignesh-Bala11/Capstone-Project/tree/Shah_Repo/%20ML%20-%20Shah%20-%20Week%203/ETL) process was tweaked  for Segment 3 to bring in additional inputs which were age, driver wins and driver position before the race and finally constructor win and constructor points before the race. As we have discussed above, included these inputs did not result in any improvement in the model’s performance (in fact it hindered the performance) and hence we decided to exclude them from the final model. 

For our Machine Learning Model, we selected classification models as our outputs represent discreate outcomes (in most cases our outputs are binary “yes” and “no” outcomes). For the our analysis for Segment 1 and Segment 2, we used three classification models: [Logistic Regression](https://github.com/Vignesh-Bala11/Capstone-Project/blob/Shah_Repo/%20ML%20-%20Shah%20-%20Week%203/ML%20-%202019/1.%20Race_Predictor_Logistic_2019.ipynb), [Support Vector Machine](https://github.com/Vignesh-Bala11/Capstone-Project/blob/Shah_Repo/%20ML%20-%20Shah%20-%20Week%203/ML%20-%202019/2.%20Race_Predictor_SVM_2019.ipynb) Classification and [Random Forrest](https://github.com/Vignesh-Bala11/Capstone-Project/blob/Shah_Repo/%20ML%20-%20Shah%20-%20Week%203/ML%20-%202019/3.%20Race_Predictor_RNF_2019.ipynb) Classification. For Segment 3, we added an additinal model which was using [Neural Net](https://github.com/Vignesh-Bala11/Capstone-Project/blob/Shah_Repo/%20ML%20-%20Shah%20-%20Week%203/ML%20-%202019/4.%20Race_Predictor_NN_2019.ipynb) Classification. 

We used the same inputs for this new model which were used for the other three. In segment 2, we had only used 2019 as a test population but as we have discussed above, for Segment 3, we have expanded our test populations to include 2017, 2018, 2019, 2018 to 2019 (2 years) and 2017 to 2019 (3 years) as test population to see if there were any marked differences in model performance when test population was changed or expanded. 

An F1 Grand Prix has twenty drivers competing to win the race. Therefore, when building a race predicting model, there are twenty possible outcomes that can take place in a race. For our initial attempts, we tried to build a model which a possible twenty outcomes for each driver. However, we had to pivot from that approach due to low accuracy scores (deeming the model unreliable). We switched our approach to a model which had two possible outcomes (race win or no win). This created a model which had significantly higher accuracy and f1 scores and the model could be deemed reliable. 

The limitation of this approach was however the fact that model would predict a significant number of races with no winners. **Since the model was not smart enough to understand that every race must have a winner, we had to tweak the race outcome function to predicting probabilities for each driver. We then sorted the probabilities in order which would essentially set out our predicted finishing grid for a race. Therefore, a driver finishing with the highest probability (even if it is below 50%) would be considered the race winner by our model.**

## Description of how the model has been trained AND Description of current accuracy scores

All machine learning models have been trained using data from the year 2000 to the 2018 season. The 2019 year has been used as a test population. In addition, as we have mentioned above, we have also used 2018 and 2017 as test populations with 2000-2017 and 2000-2016 as train populations respectively. There will be no further training of the model since our population is not expanding or changing. Since we are not using results from the current season (2021), our datasets are static and therefore doesn't require further training. 

The Summary for the model Accuracy scores are provided below: 
Accuracy Score | Random Forrest | Support Vector Machine | Logistic Regression | Neural Net
------------ | ------------- | ------------- | ------------- | -------------
2019 | 94.52% | 95.00% | 93.81% | 95.00%
2018 | 94.48% | 95.00% | 95.00% | 94.99%
2017 | 94.75% | 95.00% | 94.75% | 95.00%
2019-2018 | 95.12% | 95.00% | 94.40% | 95.00%
2019-2017 | 94.76% | 95.00% | 94.52% | 95.00%

As explained above, the Model is not smart enough to determine that every race needs a winner. Therefore for many races, the model did not assign any winner. In order to bypass this, we looked into the probabilities for each outcome and assigned the racer with the highest probability of win for a race as the winner. Based on this approach, our Models performed the following in regards to predicting the Race Winner: 

Correct Race Winner | Random Forrest | Support Vector Machine | Logistic Regression | Neural Net
------------ | ------------- | ------------- | ------------- | -------------
2019 | 10 out 21 | 12 out 21 | 8 out 21 | 11 out 21






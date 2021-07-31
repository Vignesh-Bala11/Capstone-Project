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

### Explanation of model choice, including limitations and benefits

For our Machine Learning Model, we selected classification models as our outputs represent discreate outcomes (in most cases our outputs are binary “yes” and “no” outcomes). For the purpose of our analysis, we used three classification models: [Logistic Regression](https://github.com/Vignesh-Bala11/Capstone-Project/blob/Shah_Repo/Trial%20Code%20-%20ML%20-%20Shah%20-%20Week%202/2.%20Win_Predictor_LogRegression.ipynb), [Support Vector Machine](https://github.com/Vignesh-Bala11/Capstone-Project/blob/Shah_Repo/Trial%20Code%20-%20ML%20-%20Shah%20-%20Week%202/3.%20Race_Predictor_SVM.ipynb) Classification and [Random Forrest](https://github.com/Vignesh-Bala11/Capstone-Project/blob/Shah_Repo/Trial%20Code%20-%20ML%20-%20Shah%20-%20Week%202/4.%20Race_Predictor_RandForrest.ipynb) Classification. 

An F1 Grand Prix has twenty drivers competing to win the race. Therefore, when building a race predicating model, there are twenty possible outcomes that can take place in a race. For our initial attempts, we tried to build a model which a possible twenty outcomes for each driver. However, we had to pivot from that approach due to low accuracy scores (deeming the model unreliable). We switched our approach to a model which had two possible outcomes (race win or no win). This created a model which had significantly higher accuracy and f1 scores and the model could be deemed reliable. 

The limitation of this approach was however the fact that model would predict a significant number of races with no winners. Since the model was not smart enough to understand that every race must have a winner, we had to tweak the race outcome function to predicting probabilities for each driver. We then sorted the probabilities in order which would essentially set out our predicted finishing grid for a race. Therefore, a driver finishing with the highest probability (even if it is below 50%) would be considered the race winner by our model. 


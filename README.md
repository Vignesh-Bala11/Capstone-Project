# Race Predictibility of Formula 1 :racing_car: :checkered_flag:

Sports present a vast amount of data that have been used to create a whole new paradigm of performance, team management and strategies. One sport that seems to have an over-reliance of data analysis is Formula 1 (F1). Formula 1 represents the pinnacle of automotive technology with hundreds of cars being fitted with state-of-the-art sensors generating significant amount of data, approximately 3gb per race along with 1500 datapoints, which teams monitor to determine tire performance, driver performance, track conditions etc. Few sports rely on the use of data analytics as extensively as F1 and as such major Technology companies such as Amazon Web Services, Qualcomm Technologies, Splunk all have major strategic relations with the competing teams. 

## Why F1 Data?
In recent years, Formula 1 has faced criticisms that the racing has become too predictable due to factors including lack of competition between teams, lack of overtaking and over-usage of data. Many drivers such as current Red Bull (and ex-Racing Point) driver Sergio Perez (https://www.dailymail.co.uk/sport/formulaone/article-7192379/F1-far-boring-Sergio-Perez-takes-aim-lack-competition-dull-predictable-races.html) or two-time World Champion Fernando Alonso (https://www.autosport.com/f1/news/predictable-f1-will-never-change-says-mclarens-fernando-alonso-5320449/5320449/)  have called the sport “boring” and “predictable”. The team believed this notion of race predictability to be a fascinating topic. 

Alongside race predictability affecting competition fans have noted that certain teams tend to favor different race strategies for a given event causing the same few teams to monopolize the winning of certain events. Over the past 7 years Mercedes have been dominating F1 events with the runner up also almost being Red-Bull. The team seeks to find answers for why Mercedes compared to other teams have such a dominant run and if it is a matter of having the best car and driver or if it is a matter of race strategies for given events. 

## Description of Data Source
The team got access to data directly from F1 through Kaggle and upon initial analysis we found that there is an abundance of historical data which can be used to create highly accurate ML models. Also, during initial observations we noted that the data provided was already cleaned and there creating databases, storing, and tiering the data would be less strenuous. The raw data is stored on a [Postgres](https://github.com/Vignesh-Bala11/Capstone-Project/blob/Shah_Repo/Trail%20Code%20-%20Sql%20-%20sunanda/Sql_Connection.ipynb) database hosted on Amazon Web Services. We imported the necessary tables from our database, made the necessary ETL functions to create the final table or dataset to be used for the machine learning models. The Results and Weather tables are combined with left join and stored into a new table (results_weather) to help with machine learning models. The datasets are then exported back into the database. 


## Question we would like to answer through ML-Model:

1) Are Races too Predictable?
2) Can we create segmented race strategies for Formula1 constructors depending on circuit level historical performance?
 
 ## Segmented Race Strategies: Initial Model
 Post [exploratory analysis](https://github.com/Vignesh-Bala11/Capstone-Project/blob/Shah_Repo/Trial%20Code%20-%20ML%20-%20Rama/races_ETL.ipynb), our data consisted of data on the finishing status for each driver and constructor for each circuit over the last few decades. This would help us build a [model](https://github.com/Vignesh-Bala11/Capstone-Project/blob/Shah_Repo/Trial%20Code%20-%20ML%20-%20Rama/initialML.ipynb) that would cluster historical performance of constructors depending on the circuits. Further cleaning of data can result in clusters which can help us add qualitative inputs to algorithm-created clusters to output segmented race strategies instead of a vanilla strategy for all races. 

## Dashboard:
- Tableau will be used to build the dashboard [(blueprint)](https://docs.google.com/presentation/d/178P-xTV-8FXRA3GOYNs0mXqrstW9Om0cytCS2QPis3Q/edit?usp=sharing) and will include graphs from exploratory analysis and storyboarding.
- A webpage (blueprint) will be created with interactive elements to predict the race outcome using the user selected input values.

## Communications protocol
We created a Slack group amongst the contributors which was the major communication channel. The idea was to brainstorm things out as they came up and the slack channel served as a medium to help troubleshoot things.

We also have zoom meeting cadence set up twice a week, to discuss the larger picture and for course correction of the project, if needed.

## Exploratory Analysis
### I. Racers

### 1. Nationality of Racer vs Wins in Home Country
This analysis attempts to identify if there is a higher likelihood for a racer to win a race in their home country. A new home win column was created with a Yes or No if the racer nationality and country of the race are the same. A win is defined as any of the top three positions. To visualize the results of the analysis, a bar chart and pie chart are used.

<p align="center"> <img src="https://user-images.githubusercontent.com/76491891/126873338-0f32c13d-4be8-4873-a0e7-636fc41b8d53.png" width=800></p>

- British nationality racers have the highest home wins.

<p align="center"><img src="https://user-images.githubusercontent.com/76491891/126873359-7d127860-0cc5-42b6-a6ba-91e110de9d62.png" width=350></p>

- Overall, only 8.1% of the racers have won in their home country.

### 2. Correlation between First Lap Position vs Final Position 
This analysis summarizes the final race position for a racer leading in the first lap.

<p align="center"><img src="https://user-images.githubusercontent.com/76491891/126873469-d3ef418b-446a-4346-b20e-adfc4812a14f.png" width=350></p>

- If the racer finishes his first lap position as one, there is a 55.2% chance to win the race in first position. 
- If the racer finishes his first lap position as one, there is a 21.6% chance to win the race in second or third position. 
- If the racer finishes his first lap position as one, there is a 23.1% chance to not win a podium position. 

### 3.	Correlation between Fifth Lap Position vs Final Position 
This analysis summarizes the final race position for a racer leading in the fifth lap.

<p align="center"><img src="https://user-images.githubusercontent.com/76491891/126873572-d277a774-42c9-48c0-baa2-d90b04b84598.png" width=350></p>

- If the racer finishes his fifth lap position as one, there is a 57.9% chance to win the race in first position. 
- If the racer finishes his fifth lap position as one, there is a 19.9% chance to win the race in second or third position. 
- If the racer finishes his fifth lap position as one, there is a 22.3% chance to not win a podium position. 

### 4. Starting position vs Winning Position
Its debatable whether the grid (starting) position provides a massive advantage for the racer in winning the race and this analysis is to explore if there is a trend in racer's starting position and winning position.
<p align="center"> <img src="https://user-images.githubusercontent.com/74985818/126878207-caa353c7-0aaf-4015-b863-75d843125b71.png" width=800> </p>

It appears that there does exist a maximal correlation between the starting position and the winning position. However, a caveat to this is that the starting position is decided during the qualifying race where the grid positions are decided on the lap times, with the driver to set the fastest time qualifying on pole, i.e. 1st place. Here, a lot more factors come into consideration.

### 5. Races won by Racers

Analysis to evaluate if common racer names emerge as winners in most of the races. And as seen below, over the decade, select few racers have been winning the races and majority of the racers have not won any.

<p align="center"><img src="https://user-images.githubusercontent.com/74985818/126878289-3373d495-f6d8-48a5-81c1-732c35a5e2a2.png" width=800></p>

### II. Constructors

### 6.	Constructor Performance in Various Altitudes
The altitude ranges are classified into two buckets, < 100 and > 100. 

<p align="center"><img src="https://user-images.githubusercontent.com/76491891/126873607-5c039293-9aa2-42b3-9bcf-90b0cfd20406.png" width=800></p>

- If the altitude range is < 100, Mercedes has the most average constructor points.

<p align="center"><img src="https://user-images.githubusercontent.com/76491891/126873690-c7f80dc7-8a8f-40da-8ba8-9fefc4c5ced5.png" width=800></p>

- If the altitude range is > 100, Mercedes has the most average constructor points.

### 7. Constructors Wins
Comparing the constructor wins in the same time period as racers above (#5), there are select few constructors who constantly win the race while the others have not won any.

<p align="center"><img src="https://user-images.githubusercontent.com/74985818/126878423-3018012b-6ea0-48d6-8029-233a4cdcdcf9.png" width=800></p>

### 8.	Correlation between Pit Stops vs Points by Circuits and Constructors 
The correlation between pit stops and points for the Albert Park Grand Prix circuit was performed. Similar analysis can be performed for any desired circuit. 

<p align="center"><img src="https://user-images.githubusercontent.com/76491891/126873723-8b3ef08a-9806-4c23-b764-d8908413c064.png" width=500></p>

- The correlation between stops and milliseconds is 0.83, which can be considered highly correlated.
- The correlation between stops and points is 0.59, which can be considered moderately correlated.
- The correlation between milliseconds and points is 0.55, which can be considered moderately correlated.

The correlation between pit stops and points for McLaren was performed. Similar analysis can be performed for any desired constructor.

<p align="center"><img src="https://user-images.githubusercontent.com/76491891/126873746-c2f6493c-8a30-4001-9fa1-5fa7f488d2e5.png" width=500></p>

- The correlation between stops and milliseconds is 0.37, which indicate a low correlation.
- The correlation between stops and points is 0.73, which can be considered highly correlated.
- The correlation between points and milliseconds is 0.3, which indicate a low correlation.

## Race Predictability: Machine Learning Model

### Description of preliminary data processing

As already described, our data is accessed directly through F1 through Kaggle. This data is stored in a Postgres database hosted on AWS. The necessary data from this database is extracted into Python where we perform our preliminary data processing. If required, before the datasets are imported into python, some datasets are joined to create a new dataset directly within Postgres. For example, we joined the weather and results datasets into within Postgress to create a new dataset (results_weather). 

The results_weather dataset is imported into python alongside a second dataset (races). After these two datasets have been merged, we have a complete table. This dataset has information such as driver, constructor, racing circuit, starting grid position and weather data for the race. All of this information will be used as inputs for our machine learning model. After this we performed some additional clean-up such as replace null values with 0s and filtering the table to disregard information before the year 2000. With the level if technological and regulation changes that take place in F1, we concluded that taking information before 2000 was simply not practical. That being said, we did note that even taking a twenty-year period (2000 to 2019) was long for a dynamic sport like F1. We also created output columns such as “Win” which is a binary column with a 1 for “win” and 0 for “not win”. A second output column called “podium” is also created. This is also a binary column with a 1 for driver finishing in the podium (top-three position) and 0 for not podium. 

The complete [python code](https://github.com/Vignesh-Bala11/Capstone-Project/blob/Shah_Repo/Trial%20Code%20-%20ML%20-%20Shah%20-%20Week%202/1.%20Race_Predictor_ETL.ipynb) for our preliminary data processing has been included in this repository. 

### Description of preliminary feature engineering and preliminary feature selection, including their decision-making process

The feature engineering and selection processes was determined by our exploratory analysis. As our analysis has shown, there is a strong correlation between starting position and winning the race. Similarly, there is strong correlation between constructor and driver with the likelihood of a “win” outcome. Therefore, we believe these were natural inclusions as features in our model. We used weather as an input because weather can play a part in any form of outdoor sporting event so we concluded that as another natural selection. We considered the altitudes of circuits and whether that could play a role in determining the outcome. However, as we can see in our exploratory analysis, there was no marked change in the performance of constructors which suggested that altitudes did not play a major role in performance of individual cars (aka any impact of altitude was either non-existent or universal). 

### Description of how data was split into training and testing sets

We split the training and testing datasets based on years. All data prior to the 2019 season was considered training dataset while the 2019 season racing outcomes were considered testing datasets.  The reason we are using years as a defining factor to split the two datasets is the impact it has on sports. Almost every competition is defined by the a year-long schedule (aka a “season”) or small time frame held a within a year (such as Olympics 2021 or FIFA World Cup 2018). It is extremely rare for a competition winner to be decided based on performances over multiple years. Therefore, splitting datasets by year provides the best real-life use of any form of sporting outcome predictive model. Since the purpose of our machine learning model is to test a real theory that Formula 1 as a sport has become very predictable, we believe the success of our machine learning model’s ability to predict a full season’s outcome will provide far greater insight than its success based on random one-off races spread over multiple years. 

It should be noted that we selected the 2019 and not 2020 season (which is more recent) as our test set was due to the impact of Covid 19 on all sporting events. The 2020 season was cut short and held at one-off venues which were subsequently dropped from the calendar in 2021 as F1 got back to its regular calendar. 

### Explanation of model choice, including limitations and benefits

For our Machine Learning Model, we selected classification models as our outputs represent discreate outcomes (in most cases our outputs are binary “yes” and “no” outcomes). For the purpose of our analysis, we used three classification models: [Logistic Regression](https://github.com/Vignesh-Bala11/Capstone-Project/blob/Shah_Repo/Trial%20Code%20-%20ML%20-%20Shah%20-%20Week%202/2.%20Win_Predictor_LogRegression.ipynb), [Support Vector Machine](https://github.com/Vignesh-Bala11/Capstone-Project/blob/Shah_Repo/Trial%20Code%20-%20ML%20-%20Shah%20-%20Week%202/3.%20Race_Predictor_SVM.ipynb) Classification and [Random Forrest](https://github.com/Vignesh-Bala11/Capstone-Project/blob/Shah_Repo/Trial%20Code%20-%20ML%20-%20Shah%20-%20Week%202/4.%20Race_Predictor_RandForrest.ipynb) Classification. 

An F1 Grand Prix has twenty drivers competing to win the race. Therefore, when building a race predicating model, there are twenty possible outcomes that can take place in a race. For our initial attempts, we tried to build a model which a possible twenty outcomes for each driver. However, we had to pivot from that approach due to low accuracy scores (deeming the model unreliable). We switched our approach to a model which had two possible outcomes (race win or no win). This created a model which had significantly higher accuracy and f1 scores and the model could be deemed reliable. 

The limitation of this approach was however the fact that model would predict a significant number of races with no winners. Since the model was not smart enough to understand that every race must have a winner, we had to tweak the race outcome function to predicting probabilities for each driver. We then sorted the probabilities in order which would essentially set out our predicted finishing grid for a race. Therefore, a driver finishing with the highest probability (even if it is below 50%) would be considered the race winner by our model. 

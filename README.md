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

 ## Race Predictability: Initial Model
 During [exploratory analysis](https://github.com/Vignesh-Bala11/Capstone-Project/blob/Shah_Repo/Trial%20Code%20-%20ML%20-%20Shah/shah_ML_ETL.ipynb) our data consisted of starting position, ending position, driver ID and many other columns which would provide a great starting point to build the initial [machine learning model](https://github.com/Vignesh-Bala11/Capstone-Project/blob/Shah_Repo/Trial%20Code%20-%20ML%20-%20Shah/Race_Predictor.ipynb). We further cleaned the data and decided to train our model using the circuitID, driverID, constructorID and starting positoin labels. 
 
 
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



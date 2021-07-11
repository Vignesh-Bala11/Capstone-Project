# Race Predictibility of Formula 1

Sports present a vast amount of data that have been used to create a whole new paradigm of performance, team management and strategies. One sport that seems to have an over-reliance of data analysis is Formula 1 (F1). Formula 1 represents the pinnacle of automotive technology with hundreds of cars being fitted with state-of-the-art sensors generating significant amount of data, approximately 3gb per race along with 1500 datapoints, which teams monitor to determine tire performance, driver performance, track conditions etc. Few sports rely on the use of data analytics as extensively as F1 and as such major Technology companies such as Amazon Web Services, Qualcomm Technologies, Splunk all have major strategic relations with the competing teams. 

## Why F1 Data?
In recent years, Formula 1 has faced criticisms that the racing has become too predictable due to factors including lack of competition between teams, lack of overtaking and over-usage of data. Many drivers such as current Red Bull (and ex-Racing Point) driver Sergio Perez (https://www.dailymail.co.uk/sport/formulaone/article-7192379/F1-far-boring-Sergio-Perez-takes-aim-lack-competition-dull-predictable-races.html) or two-time World Champion Fernando Alonso (https://www.autosport.com/f1/news/predictable-f1-will-never-change-says-mclarens-fernando-alonso-5320449/5320449/)  have called the sport “boring” and “predictable”. The team believed this notion of race predictability to be a fascinating topic. 

Alongside race predictability affecting competition fans have noted that certain teams tend to favor different race strategies for a given event causing the same few teams to monopolize the winning of certain events. Over the past 7 years Mercedes have been dominating F1 events with the runner up also almost being Red-Bull. The team seeks to find answers for why Mercedes compared to other teams have such a dominant run and if it is a matter of having the best car and driver or if it is a matter of race strategies for given events. 

## Description of Data Source
The team got access to data directly from F1 through Kaggle and upon initial analysis we found that there is an abundance of historical data which can be used to create highly accurate ML models. Also, during initial observations we noted that the data provided was already cleaned and there creating databases, storing, and tiering the data would be less strenuous.


## Question we would like to answer through ML-Model:

1) Are Races to Predictable?
2) Can we create segmented race strategies for Formula1 constructors depending of circuit level historical performance?

 ## Race Predictability: Initial Model
 During Exploratory analysis our data consisted of starting position, ending position, driver ID and many other columns which would provide a great starting point to build the initial model. We further cleaned the data and decided to train our model using the circuitID, driverID, constructorID and starting positoin labels. 
 
 
 ## Segmented Race Strategies: Initial Model
 Post exploratory analysis, our data consisted of data on the finishing status for each driver and constructor for each circuit over the last few decades. This would help us build a model that would cluster historical performance of constructors depending on the circuits. Further cleaning of data can result in clusters which can help us add qualitative inputs to algorithm-created clusters to output segmented race strategies instead of a vanilla strategy for all races. 
    
---
title: Revisiting Du Bois
subtitle: A Data Visualization Project
author: Nathan Kim
date: Advised by Professor Elisa Celis
nocite: '@*'
header-includes:
  - \usepackage{setspace}
  - \doublespacing
---

# Introduction

Prolific and prominent Black writer, historian, professor, political
activist, W.E.B. Du Bois has left a legend in many ways. One profound
way as been in developing and articulating data visualizations many
years before canonical pioneers of visualization like Edward Tufte,
Jacques Bertin, or Stephen Few. My project seeks to explore his work
with a critical and quantitative lens. I hope to bring to Du Bois'
portraits the worlds of modern statistics, computing resources, and
interactive visualization, but also to these fields bring Du Bois'
humanist lens and the goal of visualizing data to create a better world.

To do so, my project will focus on two questions:

1. **How does Du Bois' approach to data visualization depart from
   canonical views of data and information?**

In addition to being a sociologist who meticulously drew and recorded
social statistics for over fifty years, Du Bois was also a Black
theorist of knowledge, an educator, a novel writer, and a historian.
Some of these perspectives are visible in his approach to data
visualization. While other data visualization pioneers like Edward Tufte
try to objectively gauge the value of a dataset as the proportion to
which it represents "truth," Du Bois recognizes visualization as a
creative endeavor alongside (quite literally, in the case of the Paris
Exposition) photography and historical analysis. In extending Du Bois'
data visualization through practical tools, I hope to also convey his
artistic perspective on data visualization.

2. **How have the subjects of Du Bois' works in the 1900 Paris
   Exposition evolved over time?**

Du Bois was concerned with the "afterlives" of slavery and prospects of
Black people in the American South after emancipation in 1865, and he
provided answers by studing land ownership, occupations, income, and
geographic concentration. How does the same topic of the afterlife of
slavery in land ownership, occupations, income, and geographic
dispersion look like in the contemporary age?

# Background

### Data visualization through the centuries

Modern data visualization began with modernity itself. In the 1600s, as
writers

The map as a medium was developed alongside modern notions of states and
borders throughout the fifteenth and sixteenth centuries.^[] Other forms
of data visualization, like bar and line charts, were developed over
time to similarly convey graphically what language itself could not
express. The earliest known use of these graphics to convey statistical
information appeared in 1644, when a Flemish astronomer named Michael
Florent was tasked with representing many different distances. A table
might have sufficed to convey the raw denotation of these ^[As an
example, see the discussion fo Michael Florent's 1644 graphic in
@friendly2005a].

The next three hundred years brought much change to what is known as
data visualization, but the fundamental idea of translating statistical
concepts in graphical ideas remained the same. Technological
advancements in reproducible printing and color usage

Today, the accepted canon of data visualization pioneers has coalesced
around Edward Tufte, Jacques Bertin, and John W. Tukey.

### Demography and sociology since Du Bois

- similar trends in empiricism and

# Methods

### Extending ggplot2

The first contribution of my project is to create an R package extending
W. E. B. Du Bois' data visualizations to present day. These include

R is a programming language widely used in statistics and data
visualization. Its features of being open-sourced (and thus free and
extensible), easier to learn and write compared to some oth er
languages, and having many native data structures and functions for
computing models have made it popular today.

One especially important extension in R is the ggplot2 library and the
ecosystem of user-contributed software packages it has spawned. The
ggplot2 package is popular for providing many utility functions for
graphics in R, for example a function called `geom_smooth` for smoothed
conditional means. These functions can often abstract away complex logic
from users, so that (in the case of `geom_smooth`) a potentially
complicated choice between loess and general aggression models can be
hidden from the user that simply sees a best fit line.

But the library is far more influential for contributing its eponymous
_grammar of graphics_, or an extendable logic for how to make plots.
While plots in R and many other programming languages are syntactically

In this grammar, every plot can be decomposed into a few ingredients: a
dataset, one or more layers of geometric objects, a scale to determine
how data should be mapped to positions or aesthetics, a coordinate

```r
library(ggplot2)
ggplot(iris, aes(x =  Sepal.Length, y = Petal.Length, color = Species)) +
  geom_point() +
  geom_smooth() +
  theme_classic()
```

In other words, this grammar takes a chaotic array of plots and
consolidates them into a few recognizable forms. In both the
"vocabulary," or available geometries , and the "grammar,"

But this feature is also a limitation of ggplot2. Extending ggplot2 to
fit new geometries is difficult, and users are left with the (albeit
large) selection of features that the ggplot2 library maintainers have
already created.

### Bayesian analysis

### Data sources

### Links

# `ggdubois`

# Analysis

# Conclusion

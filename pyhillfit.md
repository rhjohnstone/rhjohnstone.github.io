---
layout: page
title: PyHillFit
permalink: /pyhillfit/
---

A heart cell's behaviour is influenced by the different ion (e.g. sodium, potassium, etc.) currents flowing into and out of the cell across its membrane.
As part of the drug cardiac safety assessment process, drugs are applied to special cells that allow the drug's effect on a particular ion current of interest to be measured.
Typically, the reduction of the ion current, as a percentage, is recorded.

One of the simplest mathematical models describing ion channel blocking is a sigmoid ("S"-shaped) function called a _Hill curve_, which is defined by two parameters:
1. IC<sub>50</sub> value --- the concentration at which the ion current is 50% blocked, and
2. Hill coefficient --- determines the steepness of the curve at the IC<sub>50</sub> value.

The Hill curve is also a function of the drug concentration, which we will call _x_, and is defined as

$$
f(x;IC_{50},Hill) := \frac{100}{1+\left( \displaystyle \frac{IC_{50}}{x} \right)^{Hill}}, \label{dose-response-model}\tag{1}
$$

which we call the _dose-response model_.

A dataset (not set in the pure maths sense --- repeats are allowed!) is of the form
$$
\{ (x_1, y_1), (x_2, y_2), \dots, (x_n, y_n)\},
$$
where _x<sub>i</sub>_ is the _i_<sup>th</sup> experimentally-applied drug concentration, and _y<sub>i</sub>_ is the _i_<sup>th</sup> experimentally-observed percentage block.
Often, the same concentrations will be repeated, so there will be repeats of _x<sub>i</sub>_ values with (probably) different corresponding _y<sub>i</sub>_ values.

We want to fit Equation \eqref{dose-response-model} to this experimental dataset, and to see how much information is contained about the parameters _IC<sub>50</sub>_ and _Hill_.

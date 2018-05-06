---
layout: page
title: PyHillFit
permalink: /pyhillfit/
---

As part of the drug cardiac safety assessment process, drugs are applied to special cells that allow the drug's effect on a particular ion current of interest to be measured. Typically, the reduction of the ion current, as a percentage, is recorded.

One of the simplest mathematical models describing ion channel blocking is a sigmoid function called a _Hill curve_, which is defined by two parameters:
1. IC50 value --- the concentration at which the ion current is 50% blocked, and
2. Hill coefficient --- describes the steepness of the curve at the IC50 value.

The Hill curve is also a function of the drug concentration, which we will call _x_, and is defined as

$$
f(x;IC_{50},Hill) := \frac{100}{1+\left( \displaystyle \frac{IC_{50}}{x} \right)^{Hill}}, \label{dose-response-model}\tag{1}
$$

which we call the _dose-response model_.

See Equation \eqref{dose-response-model}.

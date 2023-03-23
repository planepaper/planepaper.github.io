---
layout: default
---

**[Home](https://planepaper.github.io/) >> Racket Smash**

# # RacketSmash

Unity VR Project

[https://github.com/planepaper/RacketSmash](https://github.com/planepaper/RacketSmash)

- A game called "Racket Smash" as the school's VR project
![playing](../resources/racket-smash/hitting-ball.gif)

- A 3D arcade game where you hit the ball with a racket in VR
- There are a total of four mods: "Catch a mole," "Crazy," "Catch a monster," and "Break a brick."
  - Catch a mole: a mode of hitting a mole protruding from the front
  - Crazy: Mode of hitting balls that pop out of various places
  - Catch a monster: a mode that hits monsters falling from above
  - Brick Break: A mode that have to clear the front brick sculpture
- Five members of the team developed it using unity.

### Catch a mole mode

![mole-mode](../resources/racket-smash/mole-mode.gif)

### Crazy mode

![crazy-mode](../resources/racket-smash/crazy-mode.gif)

### Survival mode

![survival-mode](../resources/racket-smash/survival-mode.gif)

### Brick Break Mode

![brick-breaking-mode](../resources/racket-smash/brick-breaking-mode.gif)

## My role

I was in charge of the overall 'ball-bouncing function' and 'brick breaking mode'.

- The ball-bouncing function was first implemented by following the racket object to the tracker in a MovePosition. In addition, the ball and racket were prefab so that the function could be used equally in other modes.
- The brick breaking mode had to make the ball's material into a zero-gravity elastic collision so that the ball could roam freely in the room. However, there was a problem of not returning so that the user couldn't hit well. And eventually, it was modified and solved so that it could come toward the user when the ball returned from the brick.

## What was difficult

### Network Implementation

![bullet-problem](../resources/racket-smash/bullet-paper-problem.png)

The existing plan was for users with VR to enjoy multi-playing with network.
However, it was difficult to implement the network part in a short period of time.
It was implemented using the Photon Network library, but there was a problem that the ball could not be hit by any client other than the master client.

This is because the tracking information of the racket sent by another client was not properly delivered. Therefore, there was an error in the calculation of the actual ball's rigid body and the racket's rigid body collision at the master client stage, and ball movement was not achieved correctly. In addition, there was a delay in the movement of the racket and the ball, so the ball could not be hitted even by myself in a network environment.

#### out of sync

![synchronizing](../resources/racket-smash/live-synchronizing.gif)

#### Unable to hit the ball

![ball-returning](../resources/racket-smash/ball-returning.gif)

#### There's a delay

![playing](../resources/racket-smash/delay-happening.gif)

## So with the current project

For these reasons, I thought that it was difficult to organize a multi-environment at a given time, and I thought it was necessary to devise a new plan with a lighter concept instead of the existing plan. We planned to convert to a single arcade game and strengthen the storyline and concept to make it more casual fun.

## the result

Through the implementation of the above functions and modes, the VR project was successfully completed, and it gained great popularity at the demonstration due to its easy game method and cool hitting sense. In addition, the professor also praised the operation of the ball for providing various user experiences for different modes.

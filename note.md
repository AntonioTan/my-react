### My Note learning React
#### Lecture 20
* inline css
* external css by import
* className = {`${primary}` font_xL}
* classNames
* control css by props
* css module will make css be a variable which won't be inherited by child element 
* normal css child element may share same css with parent as className may be the same
#### Lecture 21
* 3 step 1. create html element 2. add state for its value 3. create inputHandler function 
* preventDefault
* deconstruct state value to make data look clean
#### Lecture 22-24
* constructor -> getDerivedStateFromProps -> render -> componentDidMount
* getDerivedStateFromProps -> shouldComponentUpdate -> render -> getSnapshotBeforeUpdate 
* componentWillUnMount
* getDerivedStateFromError -> componentDidCatch
#### Lecture 25
* React.Fragment 
* <> </> as shortcut for React.Fragment
* contain multiple elements while not showing the extra div in dom tree
* could add key which is the only attribute in React.Fragment
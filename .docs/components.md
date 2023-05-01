## [Avatar](../components/avatar.tsx) - `span`

   ```tsx
   import Avatar from 'components/avatar'

   <Avatar src="profiles/john-doe.png" name="John Doe"/>

   <Avatar src="profiles/john-doe.png" fallback="fallback.png"/>
   ```
   
   ### Props
   - `src: string`
   - `name?: string` - Acronym of the `name` will be used as fallback UI when image failed to load.
   - `fallback?: ReactNode` - When provided `fallback` will be used as fallback UI.
<br/>
   
## [Button](../components/button.tsx) - `button` or `next/link`

   ```tsx
   import Button from 'components/button'

   <Button label='Login' onClick={() => {}} />

   <Button label='Create Account' link='/signup' />
   ```

   ### Props
   - `label: ReactNode`
   - `icon?: ReactNode`
   - `size?: 'sm' | 'md' | 'lg'` . Default value is `md`.
   - `state?: 'loading' | 'disable'`
   - `inline?: boolean`
   - `intent?: 'solid' | 'outline' | 'link' | 'danger'`
<br/>

## [DotLottie](../components/dot-lottie.tsx) - `dotlottie-player`
  This component import the `@dotlottie/player-component` on client side.

   ```tsx
   import DotLottie from 'components/dot-lottie'

   <DotLottie 
     src='/animation.lottie' 
     onLoad={() => console.log('Animation Loaded')}/>
   ```

   ### Props
   - For all available attributes please read this [documentation](https://docs.lottiefiles.com/dotlottie-player/properties).
   - For all available events please read this [documentation](https://docs.lottiefiles.com/dotlottie-player/events). <br/>
     Note: The event need to be passed with `on` prefix and camel cased. e.g `onLoad` for `load` event.
<br/>

## [Image](../components/image.tsx) - `next/image`

   ```tsx
   import Image from 'components/image'

   <Image src='/user.png' size={36} />

   <Image src='/preview.png' size={[1920, 1080]} />
   ```

   ### Props
   - `size?: number | [width: number, height: number]` - Shorthand for image's width & height.
   - `sizes?: { sm?: string; md?: string; lg?: string; xl?: string; '2xl'?: string }` - Width of image on different breakpoints.
   ```JSX
   // Must go from small to large breakpoints.
   <Image
     sizes={{ md: '50vw', lg: '25vw', xl: '20vw' }} // ✅ Do
     sizes={{ xl: '20vw', lg: '25vw', md: '50vw' }} // 🚫 Don't
   />
   ```
<br/>


## [Motion](../components/motion.tsx) - `div`

   This component is animated with `.animate-in` when it enters viewport & `.animate-out` when leaves viewport.

   ```tsx
   import Motion from 'components/motion'

   <Motion x={2}> I'll fade-in along x-axis <Motion>
   <Motion y={2}> I'll fade-in along y-axis <Motion>
   ```

   ### Props
   - `x?: number` - Number in `rem` from which element should animated horizontally.
   - `y?: number` - Number in `rem` from which element should animated vertically.
   - `as?: string` - The HTML tag to render, `div` by default
   - `delay?: number` - Number in second.
   - `options?: number` - Options to pass into Framer's [`useInView`](https://www.framer.com/motion/use-in-view/#options) hook.
<br/>

## [Page](../components/page.tsx) - `main`

   All pages should be wrapped by this component.

   ```tsx
   import Page from 'components/page'

   <Page title='Create Account'>
     /* All page contents go here */
   </Page>
   ```

   ### Props 
   - `title: string` - title & og:title & twitter:title for the page.
   - `description?: string` - meta description & og:description & twitter:description for the page.
   - `image?: string` - og:image & twitter:image for the page.
<br/>
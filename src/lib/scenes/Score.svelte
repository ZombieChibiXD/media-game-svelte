<script lang="ts">
  interface Props {
    /** The onclick event handler */
    // onclick?: () => void;
    /** Whether to animate the loading component */
    animate?: boolean;
  }

  export let animate: Props['animate'] = false;
</script>

<div>
  Score
</div>

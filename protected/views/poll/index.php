<script src='<?php echo Yii::app()->baseUrl; ?>/js/poll_index.js'></script> 
<div class='clear'></div>
<?php
    $this->widget('bootstrap.widgets.TbAlert');
?>
<script>
$(document).ready(function(){
    if (<?php if($user_id != null) { echo true; }  ?>){
            $("li").removeClass("active");
    }
});
</script>
<div class='row'>
    <div class='span6'>
        <h2><?php echo $title; ?></h2>
    </div>
    <div class='span2'>
        <br/>
        <?php
        echo CHtml::button('Create Poll', array(
            'submit' => array('poll/create'),
            'class' => 'btn btn-success'
        ));
        ?>
    </div>
    <div class='span2'>
        <br/>
        <?php
        echo CHtml::button('Show Search ', array('id' => 'show_search', 'class' => 'btn btn-primary'));
        ?>
    </div>
</div>

<?php echo CHtml::beginForm('', 'get', array('id' => 'form_search', 'hidden' => 'hidden')); ?>
<div>
    <div class="xxwide picker">
        <?php
        echo CHtml::dropDownList('status', $status, array('is_multichoice' => 'Is Multichoice') 
            + array_flip(Poll::$IS_MULTICHOICES_SETTINGS), array('class' => 'form-control'));
        echo '</span>&nbsp';
        echo CHtml::dropDownList('poll_type', $poll_type, array('poll_type' => 'Poll Type')
            + array_flip(Poll::$POLL_TYPE_SETTINGS), array('class' => 'form-control'));
        ?>
    </div>
    <div class="xxwide picker">
        <?php
        echo CHtml::dropDownList('display_type', $display_type, array('display_type' => 'Display Type')
            + array_flip(Poll::$POLL_DISPLAY_SETTINGS), array('class' => 'form-control'));
        echo '</span>&nbsp';
        echo CHtml::dropDownList('result_display_type', $result_display_type, array('result_display_type' => 'Result Display Type')
            + array_flip(Poll::$RESULT_DISPLAY_SETTINGS), array('class' => 'form-control'));
        ?>
    </div>
    <div class="xxwide picker">
        <?php
        echo CHtml::dropDownList('result_detail_type', $result_detail_type, array('result_detail_type' => 'Result Detail Type')
            + array_flip(Poll::$RESULT_DETAIL_SETTINGS), array('class' => 'form-control'));
        echo '</span>&nbsp';
        echo CHtml::dropDownList('result_show_time_type', $result_show_time_type, 
            array('result_show_time_type' => 'Result Show Time Type') + array_flip(Poll::$RESULT_TIME_SETTINGS),
            array('class' => 'form-control'));
        ?>
    </div>
</div>
<div>
    <?php echo CHtml::submitButton('Search', array('id' => 'search-button', 'class' => 'btn btn-primary')); ?>
</div>
<?php echo CHtml::endForm(); ?>
<hr style="color: #808080">
<?php
foreach ($polls as $poll) {
    echo "<div class='row'>";
    $this->renderPartial('_view', array('poll' => $poll));
    echo "</div>";
}
?>
<div class="row">
    <?php $this->widget('CLinkPager', array(
        'pages' => $pages,
    )); ?>
</div>
<template>
    <van-nav-bar

            title="报名步骤"
            left-arrow
            @click-left="onClickLeft"

    />
    <div style="background-color:  #F0F0F0">


    <div class="describetext">请按顺序依次填写以下步骤，提交后除抵离信息外，其他资料无法修改，请核实您的信息无误后再提交。</div>

    <div style="padding-left: 10px;padding-right: 10px;text-align:left;">
        <div class="firstStep">第一步</div>
        <div class="firstContent">

            <div class="firstnumber">1</div>
            <div class="firstText">填写邀约码</div>
            <img class="fightImage" src="../image/ic_right_arrow.png"/>

        </div>

        <div class="secondStep">第二步</div>
        <div class="secondContent">

            <div class="secondnumber">2</div>
            <div class="secondText">阅读报名须知</div>
            <img class="secondImage" src="../image/ic_right_arrow.png"/>

        </div>


        <div class="thirdStep">第三步</div>
        <div class="thirdContent">

            <div class="thirdnumber">3</div>
            <div class="thirdText">填写基本信息</div>
            <img class="thirdImage" src="../image/ic_right_arrow.png"/>

        </div>

        <div class="fourthStep">第四步</div>
        <div class="fourthContent">

            <div class="fourthnumber">4</div>
            <div class="fourthText">填写其他资料</div>
            <img class="fourthImage" src="../image/ic_right_arrow.png"/>

        </div>

        <div class="submitButton">预览报名信息并提交</div>

    </div>

    </div>


</template>

<script>
    export default {
        name: "RegistrationSteps"
    }
</script>

<style scoped>
    .describetext {

        background-color: white;
        color: black;
        text-indent: 28px;
        font-size:14;
        text-align: left;
    }

    .firstStep {
        padding-top: 5px;
        color: #595959;
    }

    .firstContent {
        background-color: white;
        border: 1px solid lightgray;
        border-radius: 8px;
        height: 60px;

    }

    .firstnumber {
        width: 20px;
        height: 20px;
        background-color: #F7AB31;
        text-align: center;
        margin-top: 20px;
        margin-left: 10px;
        border-radius: 10px;
        color: white;
        float: left;
    }

    .firstText {
        height: 20px;
        float: left;
        margin-top: 20px;
        margin-left: 10px;
        font-weight: bold;
        color: black;
    }

    .fightImage {

        width: 15px;
        height: 15px;
        float: right;
        margin-top: 22.5px;
        margin-right: 15px;

    }

    .secondStep{
        padding-top: 35px;
        color: #595959;
    }

    .secondContent{
        background-color: white;
        border: 1px solid lightgray;
        border-radius: 8px;
        height: 60px;
    }

    .secondnumber {
        width: 20px;
        height: 20px;
        background-color: #F7AB31;
        text-align: center;
        margin-top: 20px;
        margin-left: 10px;
        border-radius: 10px;
        color: white;
        float: left;
    }

    .secondText {
        height: 20px;
        float: left;
        margin-top: 20px;
        margin-left: 10px;
        font-weight: bold;
        color: black;
    }

    .secondImage {
        width: 15px;
        height: 15px;
        float: right;
        margin-top: 22.5px;
        margin-right: 15px;
    }

    .thirdStep{
        padding-top: 35px;
        color: #595959;
    }

    .thirdContent{
        background-color: white;
        border: 1px solid lightgray;
        border-radius: 8px;
        height: 60px;
    }

    .thirdnumber {
        width: 20px;
        height: 20px;
        background-color: #F7AB31;
        text-align: center;
        margin-top: 20px;
        margin-left: 10px;
        border-radius: 10px;
        color: white;
        float: left;
    }

    .thirdText {
        height: 20px;
        float: left;
        margin-top: 20px;
        margin-left: 10px;
        font-weight: bold;
        color: black;
    }

    .thirdImage {
        width: 15px;
        height: 15px;
        float: right;
        margin-top: 22.5px;
        margin-right: 15px;
    }

    .fourthStep{
        padding-top: 35px;
        color: #595959;
    }

    .fourthContent{
        background-color: white;
        border: 1px solid lightgray;
        border-radius: 8px;
        height: 60px;
    }

    .fourthnumber {
        width: 20px;
        height: 20px;
        background-color: #F7AB31;
        text-align: center;
        margin-top: 20px;
        margin-left: 10px;
        border-radius: 10px;
        color: white;
        float: left;
    }

    .fourthText {
        height: 20px;
        float: left;
        margin-top: 20px;
        margin-left: 10px;
        font-weight: bold;
        color: black;
    }

    .fourthImage {
        width: 15px;
        height: 15px;
        float: right;
        margin-top: 22.5px;
        margin-right: 15px;
    }

    .submitButton {

        margin-top: 30px;
        height: 60px;
        text-align: center;
        border-radius: 8px;
        background-color: darkgray;
        color: white;

        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;


        /*#1A91E7*/

    }

</style>
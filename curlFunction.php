<?php
/**
 * Curl  class
 */
class curlFunction
{

    public function __construct()
    {

    }

    /**
     * POST 資料
     *
     * @param [type] $url  接口
     * @param [type] $postData   發送資料
     * @return void
     */
    public function curl_post($url, $postData)
    {
        $ch = curl_init();
        //永遠抓最新
        $header[] = "Cache-Control: no-cache";
        $header[] = "Pragma: no-cache";
        $header[] = "Content-Type: application/x-www-form-urlencoded";
        curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
        //等待時間
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 2);
        curl_setopt($ch, CURLOPT_TIMEOUT, 4);
        //等待時間
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($postData));
        // 設定referer
        // curl_setopt($ch, CURLOPT_REFERER, 'http://www.xuite.net');
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $result = curl_exec($ch);
        curl_close($ch);
        // echo $result;
        return $result;
        // return json_decode($result, true);
    }

    /**
     * Get 資料
     *
     * @param [type] $url  接口
     * @return void
     */
    public function curl_get($url)
    {

        $ch = curl_init();
//永遠抓最新
        $header[] = "Cache-Control: no-cache";
        $header[] = "Pragma: no-cache";
        $header[] = "Content-Type: application/x-www-form-urlencoded";

        curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
//等待時間
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 2);
        curl_setopt($ch, CURLOPT_TIMEOUT, 4);
        //等待時間
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $result = curl_exec($ch);
        curl_close($ch);
        // echo $result;
        return $result;
        // return json_decode($result, true);

    }
}

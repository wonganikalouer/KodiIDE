/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package kodistudioide;

import javafx.application.Application;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.ContextMenu;
import javafx.scene.control.MenuBar;
import javafx.scene.control.MenuItem;
import javafx.scene.layout.StackPane;
import javafx.scene.web.WebView;
import javafx.stage.Stage;

/**
 *
 * @author acer
 */
public class KodiStudioIDE extends Application {
    WebView ui;
    @Override
    public void start(Stage primaryStage) {
        ui=new WebView();
        ui.setContextMenuEnabled(false);
        ui.getEngine().setJavaScriptEnabled(true);
        MenuBar mnub=new MenuBar();
        MenuItem mi=new MenuItem("File");
        mnub.setContextMenu(new ContextMenu(mi));
        
        StackPane root = new StackPane();
        root.getChildren().addAll(mnub,ui);
        
        Scene scene = new Scene(root, 800, 600);
        
        primaryStage.setTitle("Kodi Studio");
        primaryStage.setScene(scene);
        primaryStage.show();
        
        try{
         ui.getEngine().load(KodiStudioIDE.class.getResource("Interface/main.html").toExternalForm());
        }catch(Exception e){
            System.err.println(e.getMessage());
        }
    }

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        launch(args);
    }
    
}

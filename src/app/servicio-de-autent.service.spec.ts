<div class="loginDiv" *ngIf="( auth.user | async) as obs; else login">{;{obs.email}} - {;{obs.uid}} - {;{obs.displayName}}
<br/><br/>
<button class="btn btn-secondary" (click)="auth.logout()"><i class="fas fa-sign-out-alt"></i> Salir</;button>
<br/><br/>
<button class="btn btn-success" (click)="dbApp.altausuario(obs.email, obs.uid)"><i class="fas fa-check"></i>;
Alta; User
</button>
<button; class="btn btn-danger" (click)="dbApp.bajausuario(obs.uid)"><i class="far fa-trash-alt"></i>Baja user</;button>
<br/><br/>
<app-shoppinglist></app-shoppinglist>
</div>


<ng-template; #login>
<div class="loginDiv">
<br/><br/>
<span class="fas fa-user"></span>
  <input; type="text"; name="email"; placeholder="Escribe tu email." [(ngModel)]="auth.email">
<br/><br/>
<span class="fas fa-key"></span>
  <input; type="password"; name="password"; placeholder="Escribe tu contraseña." [(ngModel)]="auth.pass">
<br/><br/>
<button class="btn btn-primary" (click)="auth.login()">
<i class="far fa-envelope"></i>;
Email; Login
</button>
<br/><br/>
<button class="btn btn-danger" (click)="auth.glogin()">
<i class="fab fa-google"></i>;
Google; Login
</button>
</div>
</ng-template>;
